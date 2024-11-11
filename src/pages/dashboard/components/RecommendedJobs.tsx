export default function RecommendedJobs() {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#0F5B7A]">Recommended Jobs</h2>
          <button className="text-[#728C3D] hover:text-[#9CB39C]">
            View All →
          </button>
        </div>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-medium text-[#0F5B7A]">Senior React Developer</h4>
            <p className="text-sm text-[#66A5AD]">TechCorp • Remote</p>
            <p className="text-sm text-[#66A5AD]">$120k - $150k • Posted 2 days ago</p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-medium text-[#0F5B7A]">Frontend Team Lead</h4>
            <p className="text-sm text-[#66A5AD]">InnovateX • Hybrid</p>
            <p className="text-sm text-[#66A5AD]">$130k - $160k • Posted 3 days ago</p>
          </div>
        </div>
      </div>
    );
  }