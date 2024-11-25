import React from 'react';
import { User } from 'firebase/auth';
import { UserProfile } from '@/types/user';  // Adjust path as needed

interface ProfileCardProps {
  user: User | null;
  userProfile: UserProfile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user, userProfile }) => {
  // You could calculate profile completion based on userProfile data
  const calculateProfileCompletion = (): number => {
    const fields = [
      userProfile?.jobTitle,
      userProfile?.bio,
      userProfile?.skills,
      // Add other fields to check
    ];
    
    const completedFields = fields.filter(field => field).length;
    return Math.round((completedFields / fields.length) * 100);
  };

  const completionPercentage = calculateProfileCompletion();

  const handleCompleteProfile = () => {
    // Add navigation or modal logic
  };

  const handleViewPublicProfile = () => {
    // Add navigation logic
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-center mb-6">
        <div className="w-20 h-20 rounded-full bg-[#0F5B7A] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          {user?.email?.charAt(0).toUpperCase()}
        </div>
        <h2 className="text-xl font-bold text-[#0F5B7A]">{user?.email}</h2>
        <p className="text-[#66A5AD]">{userProfile.jobTitle || 'Software Developer'}</p>
      </div>
      
      <div className="space-y-4">
        <div className="border-t pt-4">
          <h3 className="text-sm font-medium text-[#0F5B7A] mb-2">Profile Completion</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-[#728C3D] h-2.5 rounded-full" 
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <p className="text-xs text-[#66A5AD] mt-1">{completionPercentage}% Complete</p>
        </div>

        <button 
          onClick={handleCompleteProfile}
          className="w-full bg-[#0F5B7A] text-white py-2 px-4 rounded-md hover:bg-[#728C3D] transition-colors"
        >
          Complete Profile
        </button>
        
        <button 
          onClick={handleViewPublicProfile}
          className="w-full border border-[#728C3D] text-[#728C3D] py-2 px-4 rounded-md hover:bg-[#F5F1E6] transition-colors"
        >
          View Public Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;