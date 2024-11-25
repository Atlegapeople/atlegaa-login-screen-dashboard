import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import logo from '../../../assets/images/atlega-logo.png';
import { UserProfile } from '../../../types/user';

interface HeaderProps {
  userProfile: UserProfile;
}

export default function Header({ userProfile }: HeaderProps) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={logo} alt="Atlega People" className="h-8 w-auto" />
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#0F5B7A] hidden md:block">
              Welcome, {userProfile.displayName}
            </span>
            <button
              onClick={handleLogout}
              className="bg-[#0F5B7A] text-white px-4 py-2 rounded-md hover:bg-[#728C3D] transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}