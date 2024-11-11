import { UserProfile } from '../../../types/user';
import ApplicationsList from './ApplicationsList';
import RecommendedJobs from './RecommendedJobs';
import ProfileCard from './ProfileCard';

interface JobSeekerDashboardProps {
  userProfile: UserProfile;
}

export default function JobSeekerDashboard({ userProfile }: JobSeekerDashboardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <ApplicationsList userProfile={userProfile} />
        <RecommendedJobs userProfile={userProfile} />
      </div>
      
      <div className="md:col-span-1">
        <ProfileCard userProfile={userProfile} />
      </div>
    </div>
  );
}