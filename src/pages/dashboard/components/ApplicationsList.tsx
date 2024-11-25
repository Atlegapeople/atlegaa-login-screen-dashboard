import React from 'react';
import { UserProfile } from '../../../types/user';  // Adjust path as needed

interface JobApplication {
  id: string;
  position: string;
  company: string;
  status: 'pending' | 'interviewing' | 'offered' | 'rejected';
  dateApplied: string;
}

interface ApplicationsListProps {
  userProfile: UserProfile;
}

// Sample data - you might want to move this to a separate file
const recentApplications: JobApplication[] = [
  {
    id: '1',
    position: 'Senior Software Developer',
    company: 'Tech Corp',
    status: 'interviewing',
    dateApplied: '2024-03-10'
  },
  {
    id: '2',
    position: 'Frontend Engineer',
    company: 'InnovateX',
    status: 'pending',
    dateApplied: '2024-03-08'
  },
  {
    id: '3',
    position: 'Full Stack Developer',
    company: 'StartupY',
    status: 'offered',
    dateApplied: '2024-03-05'
  }
];

const ApplicationsList: React.FC<ApplicationsListProps> = ({}) => {
  // You can use userProfile here if needed
  // For example:
  // const userApplications = userProfile.applications || recentApplications;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#0F5B7A]">Recent Applications</h2>
        <button className="text-[#728C3D] hover:text-[#9CB39C]">
          View All →
        </button>
      </div>
      <div className="space-y-4">
        {recentApplications.map((application) => (
          <div key={application.id} className="border-b border-gray-200 pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-[#0F5B7A]">{application.position}</h4>
                <p className="text-sm text-[#66A5AD]">{application.company}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                application.status === 'interviewing' ? 'bg-blue-100 text-blue-800' :
                application.status === 'offered' ? 'bg-green-100 text-green-800' :
                application.status === 'rejected' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
              </span>
            </div>
            <p className="text-xs text-[#66A5AD] mt-1">
              Applied: {new Date(application.dateApplied).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationsList;