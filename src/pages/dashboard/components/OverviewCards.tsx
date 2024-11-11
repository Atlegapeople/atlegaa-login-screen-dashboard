interface OverviewCardProps {
    title: string;
    value: number;
    description: string;
  }
  
  function OverviewCard({ title, value, description }: OverviewCardProps) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-[#0F5B7A] mb-2">{title}</h3>
        <p className="text-3xl font-bold text-[#728C3D]">{value}</p>
        <p className="text-[#66A5AD]">{description}</p>
      </div>
    );
  }
  
  export default function OverviewCards() {
    const overviewData = [
      { title: 'Applications', value: 12, description: 'Total Applications' },
      { title: 'Interviews', value: 3, description: 'Scheduled This Week' },
      { title: 'Profile Views', value: 28, description: 'Last 30 Days' }
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {overviewData.map((data, index) => (
          <OverviewCard key={index} {...data} />
        ))}
      </div>
    );
  }