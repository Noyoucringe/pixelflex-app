import { MobileLayout } from '@/components/layout/MobileLayout';
import { Header } from '@/components/home/Header';
import { ProfileSection } from '@/components/home/ProfileSection';
import { MoodCheckIn } from '@/components/home/MoodCheckIn';
import { TrendingDiscussions } from '@/components/home/TrendingDiscussions';
import { CuratedResources } from '@/components/home/CuratedResources';

const Home = () => {
  return (
    <MobileLayout currentTab="home">
      <div className="bg-background min-h-screen">
        <Header />
        <div className="py-4">
          <ProfileSection />
          <MoodCheckIn />
          <TrendingDiscussions />
          <CuratedResources />
        </div>
      </div>
    </MobileLayout>
  );
};

export default Home;