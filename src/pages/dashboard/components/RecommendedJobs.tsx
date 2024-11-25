import React from 'react';
import { UserProfile } from '../../../types/user';  // Adjust path as needed

interface Job {
  id: string;
  title: string;
  company: string;
  workType: 'Remote' | 'Hybrid' | 'On-site';
  salary: string;
  postedDate: string;
}

interface RecommendedJobsProps {
  userProfile: UserProfile;
}

// Sample data - could be moved to a separate file
const recommendedJobs: Job[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    company: 'TechCorp',
    workType: 'Remote',
    salary: '$120k - $150k',
    postedDate: '2 days ago'
  },
  {
    id: '2',
    title: 'Frontend Team Lead',
    company: 'InnovateX',
    workType: 'Hybrid',
    salary: '$130k - $160k',
    postedDate: '3 days ago'
  }
];

const RecommendedJobs: React.FC<RecommendedJobsProps> = ({ }) => {
  // You can use userProfile here to customize recommendations
  // For example:
  // const filteredJobs = recommendedJobs.filter(job => 
  //   job.salary.match(userProfile.expectedSalary) || 
  //   job.workType === userProfile.preferredWorkType
  // );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#0F5B7A]">Recommended Jobs</h2>
        <button className="text-[#728C3D] hover:text-[#9CB39C]">
          View All →
        </button>
      </div>
      <div className="space-y-4">
        {recommendedJobs.map((job) => (
          <div key={job.id} className="border-b border-gray-200 pb-4">
            <h4 className="font-medium text-[#0F5B7A]">{job.title}</h4>
            <p className="text-sm text-[#66A5AD]">{job.company} • {job.workType}</p>
            <p className="text-sm text-[#66A5AD]">{job.salary} • Posted {job.postedDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedJobs;