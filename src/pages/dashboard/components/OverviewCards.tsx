import React from 'react';
import { UserProfile } from '../../../types/user';

interface OverviewCardProps {
  title: string;
  value: number;
  description: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-[#0F5B7A] mb-2">{title}</h3>
      <p className="text-3xl font-bold text-[#728C3D]">{value}</p>
      <p className="text-[#66A5AD]">{description}</p>
    </div>
  );
};

interface OverviewCardsProps {
  userProfile: UserProfile;
}

const OverviewCards: React.FC<OverviewCardsProps> = ({ userProfile }) => {
  // You can use userProfile to calculate real values
  const calculateOverviewData = (profile: UserProfile) => {
    return [
      {
        title: 'Applications',
        value: profile.applications?.length || 0,
        description: 'Total Applications'
      },
      {
        title: 'Interviews',
        value: profile.interviews?.filter(interview => 
          isThisWeek(new Date(interview.date))
        ).length || 0,
        description: 'Scheduled This Week'
      },
      {
        title: 'Profile Views',
        value: profile.profileViews?.last30Days || 0,
        description: 'Last 30 Days'
      }
    ];
  };

  // Helper function to check if a date is in the current week
  const isThisWeek = (date: Date) => {
    const now = new Date();
    const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
    const weekEnd = new Date(now.setDate(now.getDate() + 6));
    return date >= weekStart && date <= weekEnd;
  };

  const overviewData = calculateOverviewData(userProfile);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {overviewData.map((data, index) => (
        <OverviewCard 
          key={`overview-${data.title}-${index}`} 
          {...data} 
        />
      ))}
    </div>
  );
};

export default OverviewCards;