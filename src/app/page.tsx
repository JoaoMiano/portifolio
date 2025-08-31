import { AboutSection } from "@/components/sections/AboutSection"
import { HeroSection } from "@/components/sections/HeroSection"
import { Navbar } from "@/components/Navbar"
import { SkilsSection } from "@/components/sections/SkilsSection"
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