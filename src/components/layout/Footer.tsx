import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/atlega-logo.png';

export default function Footer() {
  const navigate = useNavigate();
  
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    jobSeekers: [
      { name: 'Browse Jobs', href: '/jobs' },
      { name: 'Career Resources', href: '/resources' },
      { name: 'CV Writing', href: '/cv-writing' },
      { name: 'Interview Tips', href: '/interview-tips' },
    ],
    employers: [
      { name: 'Post a Job', href: '/employers/post-job' },
      { name: 'Recruitment Solutions', href: '/employers/solutions' },
      { name: 'Pricing', href: '/employers/pricing' },
      { name: 'Client Success Stories', href: '/employers/success-stories' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'POPI Act', href: '/popi-act' },
    ],
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Atlega People"
              className="h-8 w-auto mb-4 cursor-pointer"
              onClick={() => navigate('/')}
            />
            <p className="text-[#66A5AD] max-w-sm mb-4">
              Empowering Talent, Elevating Futures. Connecting exceptional talent 
              with outstanding opportunities across South Africa.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="text-[#0F5B7A] hover:text-[#728C3D]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-[#0F5B7A] hover:text-[#728C3D]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-[#0F5B7A] hover:text-[#728C3D]">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-[#0F5B7A] font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-[#66A5AD] hover:text-[#728C3D] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#0F5B7A] font-semibold mb-4">Job Seekers</h3>
            <ul className="space-y-2">
              {footerLinks.jobSeekers.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-[#66A5AD] hover:text-[#728C3D] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#0F5B7A] font-semibold mb-4">Employers</h3>
            <ul className="space-y-2">
              {footerLinks.employers.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-[#66A5AD] hover:text-[#728C3D] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
              {footerLinks.legal.map((link) => (
                <button
                  key={link.name}
                  onClick={() => navigate(link.href)}
                  className="text-sm text-[#66A5AD] hover:text-[#728C3D] transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <p className="text-sm text-[#66A5AD]">
              © {currentYear} Atlega People. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}