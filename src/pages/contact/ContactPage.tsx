import { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  type: 'job_seeker' | 'employer' | 'other';
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'job_seeker'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        type: 'job_seeker'
      });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#0F5B7A] mb-4">Contact Us</h1>
          <p className="text-[#66A5AD] max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help! Fill out the form below
            and our team will get back to you shortly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            {success && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                Thanks for reaching out! We'll get back to you soon.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#0F5B7A] mb-1">
                  I am a
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as ContactFormData['type'] })}
                  className="w-full px-3 py-2 border border-[#66A5AD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#728C3D]"
                  required
                >
                  <option value="job_seeker">Job Seeker</option>
                  <option value="employer">Employer</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0F5B7A] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-[#66A5AD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#728C3D]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0F5B7A] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-[#66A5AD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#728C3D]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0F5B7A] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-[#66A5AD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#728C3D]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0F5B7A] mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 border border-[#66A5AD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#728C3D]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0F5B7A] mb-1">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-[#66A5AD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#728C3D]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-md text-white transition-colors duration-200 ${
                  isLoading ? 'bg-[#66A5AD] cursor-not-allowed' : 'bg-[#0F5B7A] hover:bg-[#728C3D]'
                }`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#0F5B7A] mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-[#728C3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#0F5B7A]">Office Address</h3>
                    <p className="text-[#66A5AD]">123 Business Street</p>
                    <p className="text-[#66A5AD]">Johannesburg, South Africa</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-[#728C3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#0F5B7A]">Email</h3>
                    <p className="text-[#66A5AD]">info@atlegapeople.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-[#728C3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#0F5B7A]">Phone</h3>
                    <p className="text-[#66A5AD]">+27 12 345 6789</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#0F5B7A] mb-6">
                Business Hours
              </h2>
              <div className="space-y-2">
                <p className="flex justify-between text-[#66A5AD]">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between text-[#66A5AD]">
                  <span>Saturday:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </p>
                <p className="flex justify-between text-[#66A5AD]">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}