import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../config/firebase';
import logo from '../../assets/images/atlega-logo.png';
import { doc, setDoc } from 'firebase/firestore';

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export default function RegistrationForm() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setError('Please enter your full name');
      return;
    }

    if (!formData.acceptTerms) {
      setError('Please accept the terms and conditions');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      // Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Update user profile with display name
      await updateProfile(userCredential.user, {
        displayName: `${formData.firstName} ${formData.lastName}`
      });

    // 2. Create initial Firestore profile document
    const userDocRef = doc(db, 'users', userCredential.user.uid);
    await setDoc(userDocRef, {
      email: formData.email,
      recentApplications: [],
      scheduledInterviews: 0,
      profileViews: 0,
      role: 'job_seeker',
      skills: [],
      uploadedDocuments: [],
      createdAt: new Date().toISOString(),
    });

      // Navigate to dashboard after successful registration
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Registration error:', err);
      // Handle specific Firebase errors
      switch (err.code) {
        case 'auth/password-does-not-meet-requirements':
          setError('Password must contain a non-alphanumeric character.')
          break;
        case 'auth/email-already-in-use':
          setError('An account with this email already exists');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address');
          break;
        case 'auth/weak-password':
          setError('Password is too weak. Please choose a stronger password');
          break;
        default:
          setError('Failed to create account. Please try again');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F5F1E6]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <img
            src={logo}
            alt="Atlega People"
            className="mx-auto h-16 w-auto mb-4"
          />
          <p className="text-center text-[#66A5AD] italic">
            Empowering Talent, Elevating Futures
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#0F5B7A] text-center mb-6">
          Create Account
        </h2>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm text-center">
            <p className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {error}
            </p>
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#0F5B7A] mb-1">
                First Name
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-3 py-2 border border-[#66A5AD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#728C3D]"
                placeholder="Enter first name"
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0F5B7A] mb-1">
                Last Name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-3 py-2 border border-[#66A5AD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#728C3D]"
                placeholder="Enter last name"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-[#0F5B7A] mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-[#66A5AD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#728C3D]"
              placeholder="name@company.com"
              required
              disabled={isLoading}
            />
          </div>

          {/* Password Fields */}
          <div>
            <label className="block text-sm font-medium text-[#0F5B7A] mb-1">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-3 py-2 border border-[#66A5AD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#728C3D]"
              placeholder="Min. 6 characters"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0F5B7A] mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full px-3 py-2 border border-[#66A5AD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#728C3D]"
              placeholder="Confirm your password"
              required
              disabled={isLoading}
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
              className="h-4 w-4 text-[#728C3D] border-[#66A5AD] rounded focus:ring-[#728C3D]"
              required
              disabled={isLoading}
            />
            <label className="ml-2 text-sm text-[#0F5B7A]">
              I accept the{' '}
              <a href="#" className="text-[#728C3D] hover:text-[#9CB39C]">
                terms and conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 text-white rounded-md transition-colors duration-200 
              ${isLoading ? 'bg-[#66A5AD] cursor-not-allowed' : 'bg-[#0F5B7A] hover:bg-[#728C3D]'}`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </span>
            ) : 'Create Account'}
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-[#66A5AD]">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="text-[#728C3D] hover:text-[#9CB39C]"
              disabled={isLoading}
            >
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}