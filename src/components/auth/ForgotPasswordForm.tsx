import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../config/firebase';
import logo from '../../assets/images/atlega-logo.png';

export default function ForgotPasswordForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (successMessage) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [successMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMessage('');
    
    try {
      await sendPasswordResetEmail(auth, email, {
        url: `${window.location.origin}/login`,
      });

      setSuccessMessage(
        'Password reset link has been sent to your email.' +
        '\nPlease note:' +
        '\n• It may take up to 15 minutes to receive the email' +
        '\n• Check your spam/junk folder' +
        '\n• Make sure you entered the correct email address'
      );
      
      setTimeout(() => {
        navigate('/login');
      }, 10000);
    } catch (err: any) {
      console.error('Password reset error:', err);
      switch (err.code) {
        case 'auth/user-not-found':
          setError('No account found with this email address');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address');
          break;
        case 'auth/too-many-requests':
          setError('Too many requests. Please try again later');
          break;
        default:
          setError('Failed to send reset email. Please try again');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F5F1E6]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-8">
          <img
            src={logo}
            alt="Atlega People"
            className="mx-auto h-16 w-auto mb-4"
          />
          <p className="text-[#66A5AD] italic">
            Empowering Talent, Elevating Futures
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#0F5B7A] text-center mb-2">
          Reset Password
        </h2>
        <p className="text-[#66A5AD] text-center mb-6">
          Enter your email address and we'll send you a link to reset your password
        </p>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
            <p className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {error}
            </p>
          </div>
        )}

        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded text-sm">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Success!</span>
            </div>
            {successMessage.split('\n').map((line, index) => (
              <p key={index} className={`mb-1 ${index === 0 ? 'font-medium' : ''}`}>
                {line}
              </p>
            ))}
            <p className="mt-4 text-center font-medium border-t border-green-200 pt-2">
              Redirecting to login in {countdown} seconds...
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#0F5B7A] mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-[#66A5AD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#728C3D]"
              placeholder="name@company.com"
              required
              disabled={isLoading || !!successMessage}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !!successMessage}
            className={`w-full py-2 px-4 text-white rounded-md transition-colors duration-200 
              ${(isLoading || !!successMessage) ? 'bg-[#66A5AD] cursor-not-allowed' : 'bg-[#0F5B7A] hover:bg-[#728C3D]'}`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending Reset Link...
              </span>
            ) : successMessage ? (
              'Email Sent'
            ) : (
              'Send Reset Link'
            )}
          </button>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="w-full py-2 px-4 border border-[#0F5B7A] text-[#0F5B7A] rounded-md hover:bg-[#F5F1E6] transition-colors"
              disabled={isLoading || !!successMessage}
            >
              Back to Login
            </button>
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="w-full py-2 px-4 border border-[#728C3D] text-[#728C3D] rounded-md hover:bg-[#F5F1E6] transition-colors"
              disabled={isLoading || !!successMessage}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}