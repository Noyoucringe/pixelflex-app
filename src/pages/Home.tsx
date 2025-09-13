import { MobileLayout } from '@/components/layout/MobileLayout';
import { Header } from '@/components/home/Header';
import { ProfileSection } from '@/components/home/ProfileSection';
import { TrendingDiscussions } from '@/components/home/TrendingDiscussions';
import { CuratedResources } from '@/components/home/CuratedResources';

const Home = () => {
  return (
    <MobileLayout currentTab="home">
      <div className="bg-background min-h-screen">
        <Header />
        <div className="py-4">
          <ProfileSection />
          <TrendingDiscussions />
          <CuratedResources />
        </div>
      </div>
    </MobileLayout>
  );
};

export default Home;