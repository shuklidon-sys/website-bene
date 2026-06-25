import { HeroSection } from "@/components/home/HeroSection";
import { PopularQuestions } from "@/components/home/PopularQuestions";
import { JourneySection } from "@/components/home/JourneySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularQuestions />
      <JourneySection />
    </>
  );
}
