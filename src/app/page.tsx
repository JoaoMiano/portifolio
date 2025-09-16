import { AboutSection } from "@/components/sections/AboutSection"
import { HeroSection } from "@/components/sections/HeroSection"
import { Navbar } from "@/components/Navbar"
import { SkilsSection } from "@/components/sections/SkilsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ContactSection } from "@/components/sections/ContactSecttion"
import { Footer } from "@/components/Footer"
const Page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkilsSection />
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Page