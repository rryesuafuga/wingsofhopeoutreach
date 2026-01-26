import HeroSection from '@/components/home/HeroSection';
import MissionSection from '@/components/home/MissionSection';
import ProgramsOverview from '@/components/home/ProgramsOverview';
import ImpactStats from '@/components/home/ImpactStats';
import StoriesSection from '@/components/home/StoriesSection';
import NewsPreview from '@/components/home/NewsPreview';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ProgramsOverview />
      <ImpactStats />
      <StoriesSection />
      <NewsPreview />
    </>
  );
}
