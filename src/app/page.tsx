import { HeroSection } from "@/components/HeroSection"
import { Navbar } from "@/components/Navbar"
import { ThemeToogle } from "@/components/theme-toogle"

const Page = ()=>{
  return(
    <div className="min-h-screen">
      <Navbar/>
      <HeroSection/>

    </div>
  )
}

export default Page