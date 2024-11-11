import { UserProfile } from '../../../types/user';
import JobPostings from './JobPostings';
import CandidatesList from './CandidatesList';
import CompanyProfile from './CompanyProfile';

interface EmployerDashboardProps {
  userProfile: UserProfile;
}

export default function EmployerDashboard({ userProfile }: EmployerDashboardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <JobPostings userProfile={userProfile} />
        <CandidatesList userProfile={userProfile} />
      </div>
      
      <div className="md:col-span-1">
        <CompanyProfile userProfile={userProfile} />
      </div>
    </div>
  );
}