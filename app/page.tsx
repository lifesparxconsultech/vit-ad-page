import About from "@/src/components/about";
import CareerTransformation from "@/src/components/career-transformation";
import CounsellorCta from "@/src/components/counsellor-cta";
import Faq from "@/src/components/faq";
import GlobalFaculty from "@/src/components/global-faculty";
import Hero from "@/src/components/home";
import ProgramHighlights from "@/src/components/program-highlight";
import SemesterCurriculum from "@/src/components/semester-curriculum";
import Specializations from "@/src/components/specilization";
import StartYourStory from "@/src/components/starty-our-story";
import SuccessStories from "@/src/components/success-stories";
import WhyChoose from "@/src/components/why-choose";


export default function Home(){
  return(
   <>
    <Hero />
    <About />
    <WhyChoose />
    <ProgramHighlights />
    <Specializations />
    <SemesterCurriculum />
    <GlobalFaculty />
    <CareerTransformation />
    <CounsellorCta />
    <SuccessStories />
    <StartYourStory />
    <Faq />
   </>
  )
}