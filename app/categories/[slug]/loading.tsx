import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CategoryLoading() {
  return (
    <div>
      <Navbar />
      
      <div className="container-custom py-8 md:py-12">
        {/* Hero section skeleton */}
        <div className="w-full h-64 rounded-xl bg-gray-200 animate-pulse mb-8"></div>
        
        <div className="flex flex-col gap-4 mb-8">
          {/* Category title skeleton */}
          <div className="h-10 w-3/4 max-w-lg bg-gray-200 animate-pulse rounded"></div>
          {/* Description skeleton */}
          <div className="h-4 w-full max-w-3xl bg-gray-200 animate-pulse rounded"></div>
          <div className="h-4 w-full max-w-2xl bg-gray-200 animate-pulse rounded"></div>
          <div className="h-4 w-full max-w-xl bg-gray-200 animate-pulse rounded"></div>
        </div>
        
        {/* Business cards grid skeleton */}
        <h2 className="text-2xl font-semibold mb-6">
          <div className="h-8 w-64 bg-gray-200 animate-pulse rounded"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="border rounded-lg p-4 h-80 flex flex-col">
              {/* Image skeleton */}
              <div className="w-full h-40 bg-gray-200 animate-pulse rounded-lg mb-4"></div>
              {/* Business name skeleton */}
              <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded mb-2"></div>
              {/* Rating skeleton */}
              <div className="h-4 w-1/4 bg-gray-200 animate-pulse rounded mb-2"></div>
              {/* Description skeleton */}
              <div className="h-4 w-full bg-gray-200 animate-pulse rounded mb-1"></div>
              <div className="h-4 w-2/3 bg-gray-200 animate-pulse rounded"></div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 