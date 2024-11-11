// src/components/DocumentUpload.tsx
import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { UploadedDocument } from '../../types/user'; // Import the type for the document
import { db, storage } from '@/config/firebase';

interface DocumentUploadProps {
  userId: string;
  onUploadComplete: (document: UploadedDocument) => void;
}

export default function DocumentUpload({ userId, onUploadComplete }: DocumentUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (
      selectedFile &&
      ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'].includes(
        selectedFile.type
      )
    ) {
      setFile(selectedFile);
      setError('');
    } else {
      setError('Unsupported file type. Please upload a PDF, DOC, DOCX, or TXT file.');
      setFile(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const timestamp = new Date().toISOString();
    const fileRef = ref(storage, `documents/${userId}/${file.name}_${timestamp}`);

    try {
      await uploadBytes(fileRef, file);
      const fileURL = await getDownloadURL(fileRef);

      const uploadedDocument: UploadedDocument = { name: file.name, url: fileURL, timestamp };
      onUploadComplete(uploadedDocument);

      // Update the Firestore document
      const userDocRef = doc(db, 'users', userId);
      await updateDoc(userDocRef, {
        uploadedDocuments: arrayUnion(uploadedDocument),
      });

      setFile(null);
      setError('');
    } catch (err) {
      console.error('Error uploading file:', err);
      setError('Failed to upload file. Please try again.');
    }
  };

  return (
    <div className="document-upload bg-white p-4 rounded-lg shadow-md w-full max-w-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Upload Document</h3>

      <input type="file" onChange={handleFileChange} className="mb-2 w-full text-gray-700" />

      {file && (
        <div className="file-info mb-2">
          <span className="text-gray-600">{file.name}</span>
          <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full mt-2 font-semibold transition">
            Upload
          </button>
        </div>
      )}

      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </div>
  );
}
