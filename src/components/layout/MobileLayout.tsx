import { ReactNode } from 'react';
import { BottomNavigation } from './BottomNavigation';

interface MobileLayoutProps {
  children: ReactNode;
  currentTab?: string;
}

export const MobileLayout = ({ children, currentTab }: MobileLayoutProps) => {
  return (
    <div className="mobile-container">
      <main className="pb-16 min-h-screen">
        {children}
      </main>
      <BottomNavigation currentTab={currentTab} />
    </div>
  );
};