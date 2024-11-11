import { User } from 'firebase/auth';

interface ProfileCardProps {
  user: User | null;
}

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-center mb-6">
        <div className="w-20 h-20 rounded-full bg-[#0F5B7A] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          {user?.email?.charAt(0).toUpperCase()}
        </div>
        <h2 className="text-xl font-bold text-[#0F5B7A]">{user?.email}</h2>
        <p className="text-[#66A5AD]">Software Developer</p>
      </div>
      
      <div className="space-y-4">
        <div className="border-t pt-4">
          <h3 className="text-sm font-medium text-[#0F5B7A] mb-2">Profile Completion</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-[#728C3D] h-2.5 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <p className="text-xs text-[#66A5AD] mt-1">70% Complete</p>
        </div>

        <button className="w-full bg-[#0F5B7A] text-white py-2 px-4 rounded-md hover:bg-[#728C3D] transition-colors">
          Complete Profile
        </button>
        
        <button className="w-full border border-[#728C3D] text-[#728C3D] py-2 px-4 rounded-md hover:bg-[#F5F1E6] transition-colors">
          View Public Profile
        </button>
      </div>
    </div>
  );
}