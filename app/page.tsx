import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import Education from "./components/home/education"
import Experience from "./components/home/experience"
import HeroSection from "./components/home/hero-section"
import AdditionalInfo from "./components/home/additional-info"

const page = () => {
  return (
    <main>
      <HeroSection/>
      <Divider/>
      <AboutMe/>
      <Divider/>
      <Experience/>
      <Divider/>
      <Education/>
      <Divider/>
      <AdditionalInfo/>
      <Divider/>
    </main>
  )
}

export default page
