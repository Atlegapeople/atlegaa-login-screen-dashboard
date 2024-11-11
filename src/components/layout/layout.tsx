import { ReactNode } from 'react';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#F5F1E6] flex flex-col">
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}