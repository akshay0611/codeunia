import { HeroSection } from "@/components/home/HeroSection"
import { FeaturesSection } from "@/components/home/FeaturesSection"
export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      <div className="w-full max-w-[2000px]">
        <HeroSection />
        <FeaturesSection />
      </div>
    </div>
  )
}