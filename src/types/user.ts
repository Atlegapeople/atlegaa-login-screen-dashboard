export interface UserProfile {
    id?: string;
    email?: string | null;
    displayName: string | null;
    role: 'job_seeker' | 'employer';
    industry?: string;
    jobTitle?: string;
    location?: string;
    skills?: SkillData[]; // Updated skills type
    applications?: ApplicationData[];
    savedJobs?: string[];
    profileCompletion?: number;
    uploadedDocuments?: UploadedDocument[]; // New field for uploaded documents
}

export interface SkillData {
    name: string;
    rating: number;
}

export interface ApplicationData {
    id: string;
    jobTitle: string;
    company: string;
    status: 'pending' | 'reviewing' | 'interviewing' | 'offered' | 'rejected';
    appliedDate: string;
}

export interface UploadedDocument {
    name: string;       // The file name
    url: string;        // The URL for accessing the uploaded document
    timestamp: string;  // The timestamp when the document was uploaded
}
