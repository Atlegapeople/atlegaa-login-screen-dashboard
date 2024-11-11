import { UserProfile } from '../../../types/user';

interface ProfileCardProps {
  userProfile: UserProfile;
}

export default function ProfileCard({ userProfile }: ProfileCardProps) {
  const getProfileCompletionTasks = () => {
    const tasks = [];
    if (!userProfile.jobTitle) tasks.push('Add current job title');
    if (!userProfile.location) tasks.push('Add location');
    if (!userProfile.skills?.length) tasks.push('Add skills');
    return tasks;
  };

  const incompleteTasks = getProfileCompletionTasks();
  const profileCompletion = 100 - (incompleteTasks.length * 20);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-6">
        <div className="w-20 h-20 rounded-full bg-[#0F5B7A] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          {userProfile.displayName?.[0] || userProfile.email?.[0]}
        </div>
        <h2 className="text-xl font-bold text-[#0F5B7A]">
          {userProfile.displayName || 'Complete Your Profile'}
        </h2>
        <p className="text-[#66A5AD]">{userProfile.jobTitle || 'Add Job Title'}</p>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-[#0F5B7A] mb-2">Profile Completion</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-[#728C3D] h-2.5 rounded-full" 
              style={{ width: `${profileCompletion}%` }}
            ></div>
          </div>
          <p className="text-xs text-[#66A5AD] mt-1">{profileCompletion}% Complete</p>
        </div>

        {incompleteTasks.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-[#0F5B7A] mb-2">Complete Your Profile</h3>
            <ul className="space-y-2">
              {incompleteTasks.map((task, index) => (
                <li key={index} className="text-sm text-[#66A5AD]">• {task}</li>
              ))}
            </ul>
          </div>
        )}

        <button className="w-full bg-[#0F5B7A] text-white py-2 px-4 rounded-md hover:bg-[#728C3D] transition-colors">
          Edit Profile
        </button>
      </div>
    </div>
  );
}