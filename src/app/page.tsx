import { AboutSection } from "@/components/AboutSection"
import { HeroSection } from "@/components/HeroSection"
import { Navbar } from "@/components/Navbar"
import { SkilsSection } from "@/components/SkilsSection"
const Page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkilsSection />
    </div>
  )
}

export default Page