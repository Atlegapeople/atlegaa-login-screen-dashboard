import { motion } from 'framer-motion';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Cell
} from 'recharts';

export default function AboutPage() {
  // Sample data for charts
  const employmentData = [
    { year: '2019', rate: 43.1 },
    { year: '2020', rate: 38.4 },
    { year: '2021', rate: 39.5 },
    { year: '2022', rate: 41.2 },
    { year: '2023', rate: 42.8 }
  ];

  const industryData = [
    { name: 'Agriculture', value: 10 },
    { name: 'Manufacturing', value: 15 },
    { name: 'Services', value: 35 },
    { name: 'Trade & Retail', value: 20 },
    { name: 'Other', value: 20 }
  ];

  const satisfactionData = [
    { month: 'Jan', score: 70 },
    { month: 'Feb', score: 72 },
    { month: 'Mar', score: 74 },
    { month: 'Apr', score: 75 },
    { month: 'May', score: 77 },
    { month: 'Jun', score: 78 },
  ];

  const COLORS = ['#0F5B7A', '#728C3D', '#66A5AD', '#9CB39C', '#B8D8D8'];

  const teamMembers = [
    {
      name: 'Sisipho Nkosi',
      role: 'CEO & Founder',
      image: '/api/placeholder/150/150',
      bio: '15+ years in recruitment and talent acquisition'
    },
    {
      name: 'Ntandoyenkosi Gumede',
      role: 'Head of Operations',
      image: '/api/placeholder/150/150',
      bio: 'Expert in scaling recruitment operations'
    },
    {
      name: 'Lungisile Mageba',
      role: 'Head of Talent',
      image: '/api/placeholder/150/150',
      bio: 'Specialist in talent assessment and development'
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1E6]">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#0F5B7A] text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="text-4xl font-bold mb-6"
            >
              Empowering Talent,
              <br />
              Elevating Futures
            </motion.h1>
            <motion.p
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              Since 2019, Atlega People has been at the forefront of connecting 
              exceptional talent with outstanding opportunities across South Africa.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Mission & Values */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#0F5B7A] mb-4">Our Mission</h2>
              <p className="text-[#66A5AD]">
                To revolutionize the recruitment industry by providing innovative solutions 
                that connect talented individuals with their dream careers while helping 
                organizations build high-performing teams.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#0F5B7A] mb-4">Our Values</h2>
              <ul className="space-y-3 text-[#66A5AD]">
                <li>• Excellence in everything we do.</li>
                <li>• Integrity and transparency.</li>
                <li>• Innovation and adaptability.</li>
                <li>• Diversity and inclusion.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Growth Charts Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#0F5B7A] text-center mb-12"
          >
            Our Growth Story
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Employment Trends */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#0F5B7A] mb-4">
              Employment Trends Over Time
              </h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={employmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis 
                      domain={[35, 45]} 
                      ticks={[35, 37, 39, 41, 43, 45]}
                      label={{ value: 'Employment Rate (%)', angle: -90, position: 'insideLeft' }} 
                    />
                    <Tooltip formatter={(value) => [`${value}%`, 'Employment Rate']} />
                    <Bar dataKey="rate" fill="#0F5B7A" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/*  Industry Employment Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#0F5B7A] mb-4">
              Industry Employment Distribution
              </h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={industryData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {industryData.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Satisfaction Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#0F5B7A] mb-4">
                Satisfaction Score Over Months
              </h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={satisfactionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                     <XAxis 
                      dataKey="month"
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                        domain={[65, 80]}
                        ticks={[65, 68, 71, 74, 77, 80]}
                        label={{ 
                          value: 'Satisfaction Score (%)', 
                          angle: -90, 
                          position: 'insideLeft',
                          style: { textAnchor: 'middle' }
                        }}
                      />
                    <YAxis domain={[85, 100]} />
                    <Tooltip 
                        formatter={(value) => [`${value}%`, 'Satisfaction Score']}
                      />
                    <Line type="monotone" dataKey="score" stroke="#728C3D" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#0F5B7A] text-center mb-12"
          >
            Meet Our Leadership Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-[#0F5B7A] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#728C3D] mb-2">{member.role}</p>
                <p className="text-[#66A5AD]">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-[#0F5B7A] text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of professionals who trust Atlega People</p>
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4"
          >
            {/* <button className="bg-white text-[#0F5B7A] px-8 py-3 rounded-md hover:bg-[#728C3D] hover:text-white transition-colors">
              View Jobs
            </button> */}
            <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-[#0F5B7A] transition-colors">
              Contact Us
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}