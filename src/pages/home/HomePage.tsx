import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import diversityImage from '../../assets/images/banner-right.png';

export default function HomePage() {
  const navigate = useNavigate();

  const statsList = [
    { number: '500+', label: 'Companies Trust Us', color: '#0F5B7A' },
    { number: '10,000+', label: 'Active Job Seekers', color: '#728C3D' },
    { number: '95%', label: 'Success Rate', color: '#66A5AD' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-[#0F5B7A] block">Empowering</span>
              <span className="text-[#728C3D] block">Talent, Elevating</span>
              <span className="text-[#0F5B7A] block">Futures</span>
            </h1>
            <p className="text-lg md:text-xl text-[#66A5AD]">
              Connecting exceptional talent with outstanding opportunities. 
              Our platform brings together professionals and organizations 
              to create meaningful career partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/register')}
                className="px-8 py-4 bg-[#0F5B7A] text-white rounded-md hover:bg-[#728C3D] transition-colors text-lg font-medium"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate('/jobs')}
                className="px-8 py-4 border-2 border-[#0F5B7A] text-[#0F5B7A] rounded-md hover:bg-[#0F5B7A] hover:text-white transition-colors text-lg font-medium"
              >
                Browse Jobs
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src={diversityImage}
              alt="Diverse professionals"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statsList.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div 
                  className="text-5xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <div className="text-[#66A5AD]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gradient-to-b from-white to-[#F5F1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0F5B7A] mb-4">
              Why Choose Atlega People?
            </h2>
            <p className="text-[#66A5AD] max-w-2xl mx-auto">
              We provide comprehensive recruitment solutions that connect the right talent 
              with the right opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-[#728C3D] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#0F5B7A] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#66A5AD]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0F5B7A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-gray-200 mb-6 md:mb-0">
                Join thousands of professionals who trust Atlega People
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/register')}
                className="px-8 py-4 bg-white text-[#0F5B7A] rounded-md hover:bg-[#728C3D] hover:text-white transition-colors text-lg font-medium"
              >
                Create Account
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white hover:text-[#0F5B7A] transition-colors text-lg font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F5B7A] text-center mb-12">
            What People Say About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0F5B7A] flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-[#0F5B7A]">{testimonial.name}</div>
                    <div className="text-sm text-[#66A5AD]">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-[#66A5AD]">{testimonial.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F5B7A] text-center mb-12">
            Trusted by Leading Companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {/* Add partner logos here */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-12 bg-gray-200 rounded-md"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Sample data
const services = [
  {
    title: 'Job Seekers',
    description: 'Find your dream job with personalized recommendations and an easy application process.',
    icon: '👤'
  },
  {
    title: 'Employers',
    description: 'Access top talent and streamline your recruitment process with our advanced tools.',
    icon: '🏢'
  },
  {
    title: 'Career Resources',
    description: 'Access professional development resources and industry insights.',
    icon: '📚'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Software Developer',
    comment: 'Atlega People helped me find my dream job within weeks. The platform is intuitive and the team is incredibly supportive.'
  },
  {
    name: 'Michael Chen',
    role: 'HR Manager',
    comment: 'As an employer, I\'ve found exceptional talent through Atlega People. Their screening process is thorough and efficient.'
  },
  {
    name: 'Lisa Patel',
    role: 'Marketing Director',
    comment: 'The quality of candidates and the platform\'s features have made our recruitment process much more effective.'
  }
];