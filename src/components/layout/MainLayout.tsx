import { ReactNode, Suspense } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import Loader from '../common/Loader';
import PageTransition from './PageTransition';
import ErrorBoundary from '../common/ErrorBoundary';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#F5F1E6] flex flex-col">
        <Navbar />
        
        <Suspense fallback={<Loader />}>
          <PageTransition>
            <main className="flex-grow">
              {children}
            </main>
          </PageTransition>
        </Suspense>

        <Footer />
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}