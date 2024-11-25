import React from 'react';
import { UserProfile } from '../../../types/user';

interface CompanyProfileProps {
  userProfile: UserProfile;
}

const CompanyProfile: React.FC<CompanyProfileProps> = ({ userProfile }) => {
  return (
    <div>
      {/* Your component code */}
    </div>
  );
};

export default CompanyProfile;