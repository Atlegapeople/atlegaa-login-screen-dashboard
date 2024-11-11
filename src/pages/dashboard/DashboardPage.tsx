import { useState, useEffect } from 'react';
import { auth, db } from '../../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Header from './components/Header';
import OverviewCards from './components/OverviewCards';
import JobSeekerDashboard from './components/JobSeekerDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import SkillRating from '../../components/SkillRating';
import DocumentUpload from '../../components/DocumentUpload';
import { UserProfile, SkillData, UploadedDocument } from '../../types/user';
import Loader from '../../components/common/Loader';

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(auth.currentUser);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState('');

  const fetchUserProfile = async (uid: string): Promise<void> => {
    try {
      const userDocRef = doc(db, 'users', uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        setUserProfile({ id: userDoc.id, ...userDoc.data() } as UserProfile);
      }
    } catch (err) {
      console.error('Error fetching user profile:', err);
      setError('Failed to load user profile');
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        fetchUserProfile(user.uid);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleAddSkill = async (newSkill: SkillData) => {
    if (!user || !userProfile) return;

    const updatedSkills = [...(userProfile.skills || []), newSkill];
    setUserProfile({ ...userProfile, skills: updatedSkills });

    try {
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, { skills: updatedSkills });
      console.log('Skill added successfully');
    } catch (error) {
      console.error('Error updating skills:', error);
      setError('Failed to update skills');
    }
  };

  const handleUploadComplete = (uploadedDocument: UploadedDocument) => {
    if (!userProfile) return;
    setUserProfile({
      ...userProfile,
      uploadedDocuments: [...(userProfile.uploadedDocuments || []), uploadedDocument],
    });
  };

  if (isLoading) return <Loader />;
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F1E6]">
        <div className="text-red-600 text-xl">{error}</div>
      </div>
    );
  }
  if (!user || !userProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F1E6]">
        <div className="text-[#0F5B7A] text-xl">Please log in to view your dashboard</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F1E6]">
      <Header userProfile={userProfile} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <OverviewCards userProfile={userProfile} />

        {userProfile.role === 'job_seeker' ? (
          <JobSeekerDashboard userProfile={userProfile} />
        ) : (
          <EmployerDashboard userProfile={userProfile} />
        )}

        {/* Skill Rating Section */}
        <div className="skills-section mt-8">
          <h2 className="text-2xl font-semibold mb-4">Add Your Skills</h2>
          <SkillRating onAddSkill={handleAddSkill} />
          <div className="skills-list mt-4">
            {userProfile.skills && userProfile.skills.length > 0 ? (
              userProfile.skills.map((skill, index) => (
                <div key={index} className="skill-item p-2 bg-gray-100 rounded mb-2 flex justify-between items-center">
                  <span className="font-semibold text-gray-700">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <div
                      style={{ width: `${skill.rating * 10}%` }}
                      className={`h-4 rounded ${
                        skill.rating <= 3 ? 'bg-red-500' : skill.rating <= 7 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                    ></div>
                    <span className="text-sm text-gray-600">{skill.rating}/10</span>
                  </div>
                </div>
              ))
            ) : (
              <p>No skills added yet.</p>
            )}
          </div>
        </div>

        {/* Document Upload Section */}
        <div className="document-upload-section mt-8">
          <h2 className="text-2xl font-semibold mb-4">Upload Your Documents</h2>
          <DocumentUpload userId={user.uid} onUploadComplete={handleUploadComplete} />

          <h2 className="text-xl font-semibold mt-8 mb-4">Uploaded Documents</h2>
          <div className="uploaded-documents-list">
            {userProfile.uploadedDocuments && userProfile.uploadedDocuments.length > 0 ? (
              userProfile.uploadedDocuments.map((doc, index) => (
                <div key={index} className="uploaded-document-item mb-2 p-2 bg-gray-100 rounded flex justify-between items-center">
                  <span className="font-semibold">{doc.name}</span>
                  <span className="text-sm text-gray-500">{new Date(doc.timestamp).toLocaleString()}</span>
                </div>
              ))
            ) : (
              <p>No documents uploaded yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
