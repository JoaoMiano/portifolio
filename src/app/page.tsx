import { AboutSection } from "@/components/sections/AboutSection"
import { HeroSection } from "@/components/sections/HeroSection"
import { Navbar } from "@/components/Navbar"
import { SkilsSection } from "@/components/sections/SkilsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
const Page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkilsSection />
      <ProjectsSection/>
    </div>
  )
}

export default Page