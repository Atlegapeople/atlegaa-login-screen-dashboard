export default function Loader() {
    return (
      <div className="fixed inset-0 bg-[#F5F1E6] bg-opacity-50 flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0F5B7A]"></div>
          <p className="mt-4 text-[#0F5B7A] font-medium">Loading...</p>
        </div>
      </div>
    );
  }