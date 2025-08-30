import { AboutSection } from "@/components/AboutSection"
import { HeroSection } from "@/components/HeroSection"
import { Navbar } from "@/components/Navbar"

const Page = ()=>{
  return(
    <div className="min-h-screen">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>

    </div>
  )
}

export default Page