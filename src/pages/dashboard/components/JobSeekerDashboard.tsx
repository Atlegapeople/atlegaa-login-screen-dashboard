import { UserProfile } from '../../../types/user';
import ApplicationsList from './ApplicationsList';
import RecommendedJobs from './RecommendedJobs';
import ProfileCard from './ProfileCard';
import { auth } from '../../../config/firebase.ts';
import { useAuthState } from 'react-firebase-hooks/auth';

interface JobSeekerDashboardProps {
  userProfile: UserProfile;
}

export default function JobSeekerDashboard({ userProfile }: JobSeekerDashboardProps) {

  const [user, _loading] = useAuthState(auth);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <ApplicationsList userProfile={userProfile} />
        <RecommendedJobs userProfile={userProfile} />
      </div>
      
      <div className="md:col-span-1">
        <ProfileCard userProfile={userProfile} user={user || null} />
      </div>
    </div>
  );
}