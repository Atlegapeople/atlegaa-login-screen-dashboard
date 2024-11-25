import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { User } from 'firebase/auth';
import logo from '../../assets/images/atlega-logo.png';

interface MenuItem {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}

export default function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const menuItems: MenuItem[] = [
    // {
    //   name: 'Find Jobs',
    //   href: '/jobs',
    //   submenu: [
    //     { name: 'Browse All Jobs', href: '/jobs/browse' },
    //     { name: 'Job Categories', href: '/jobs/categories' },
    //     { name: 'Companies', href: '/jobs/companies' },
    //   ]
    // },
    // {
    //   name: 'For Employers',
    //   href: '/employers',
    //   submenu: [
    //     { name: 'Post a Job', href: '/employers/post-job' },
    //     { name: 'Recruitment Solutions', href: '/employers/solutions' },
    //     { name: 'Pricing', href: '/employers/pricing' },
    //   ]
    // },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const UserProfileSection = () => (
    <div className="relative">
      <button
        onClick={() => setIsProfileOpen(!isProfileOpen)}
        className="flex items-center space-x-2 text-[#0F5B7A] hover:text-[#728C3D] transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-[#0F5B7A] flex items-center justify-center text-white">
          {currentUser?.email?.charAt(0).toUpperCase()}
        </div>
        <span className="hidden md:block truncate max-w-[150px]">
          {currentUser?.email}
        </span>
      </button>

      {isProfileOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              onClick={() => navigate('/dashboard')}
              className="block w-full text-left px-4 py-2 text-sm text-[#0F5B7A] hover:bg-gray-100"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate('/profile')}
              className="block w-full text-left px-4 py-2 text-sm text-[#0F5B7A] hover:bg-gray-100"
            >
              Profile Settings
            </button>
            <hr className="my-1" />
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );

  function toggleDropdown(_name: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-10 w-auto cursor-pointer"
              src={logo}
              alt="Atlega People"
              onClick={() => navigate('/')}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="px-3 py-2 text-[#0F5B7A] hover:text-[#728C3D] transition-colors flex items-center"
                  onClick={() => item.submenu ? toggleDropdown(item.name) : navigate(item.href)}
                  onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.submenu && setActiveDropdown(null)}
                >
                  {item.name}
                  {item.submenu && (
                    <svg
                      className="ml-1 h-5 w-5 transform transition-transform duration-200"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>

                {item.submenu && activeDropdown === item.name && (
                  <div
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => navigate(subItem.href)}
                          className="block w-full text-left px-4 py-2 text-sm text-[#0F5B7A] hover:bg-gray-100"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Auth Section */}
            {currentUser ? (
              <UserProfileSection />
            ) : (
              // {/* Sign in and Register buttons */}
              // <div className="flex items-center space-x-4">
              //   <button
              //     onClick={() => navigate('/login')}
              //     className="px-4 py-2 text-[#0F5B7A] hover:text-[#728C3D] transition-colors"
              //   >
              //     Sign in
              //   </button>
              //   <button
              //     onClick={() => navigate('/register')}
              //     className="px-4 py-2 bg-[#0F5B7A] text-white rounded-md hover:bg-[#728C3D] transition-colors"
              //   >
              //     Register
              //   </button>
              // </div>
              null
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {currentUser && <UserProfileSection />}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#0F5B7A] hover:text-[#728C3D] ml-2"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.name}>
                <button
                  className="w-full text-left px-3 py-2 text-[#0F5B7A] hover:text-[#728C3D] transition-colors flex items-center justify-between"
                  onClick={() => item.submenu ? toggleDropdown(item.name) : navigate(item.href)}
                >
                  {item.name}
                  {item.submenu && (
                    <svg
                      className={`ml-1 h-5 w-5 transform transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>

                {item.submenu && activeDropdown === item.name && (
                  <div className="pl-4 py-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => navigate(subItem.href)}
                        className="block w-full text-left px-3 py-2 text-sm text-[#0F5B7A] hover:text-[#728C3D]"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {!currentUser && (
              <div className="pt-4 flex flex-col space-y-2">
                <button
                  onClick={() => navigate('/login')}
                  className="w-full px-4 py-2 text-[#0F5B7A] hover:text-[#728C3D] transition-colors text-center"
                >
                  Sign in
                </button>
                <button
                  onClick={() => navigate('/register')}
                  className="w-full px-4 py-2 bg-[#0F5B7A] text-white rounded-md hover:bg-[#728C3D] transition-colors"
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}