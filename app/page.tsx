import HeroSection from '@/components/sections/HeroSection'
import ProblemStatement from '@/components/sections/ProblemStatement'
import SolutionOverview from '@/components/sections/SolutionOverview'
import SocialProof from '@/components/sections/SocialProof'
import FeatureHighlights from '@/components/sections/FeatureHighlights'
import ComparisonTable from '@/components/sections/ComparisonTable'
import UseCaseCards from '@/components/sections/UseCaseCards'
import FreeTierCTA from '@/components/sections/FreeTierCTA'
import Testimonials from '@/components/sections/Testimonials'
import OpenSource from '@/components/sections/OpenSource'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemStatement />
      <SolutionOverview />
      <SocialProof />
      <FeatureHighlights />
      <ComparisonTable />
      <UseCaseCards />
      <FreeTierCTA />
      <Testimonials />
      <OpenSource />
      <FinalCTA />
    </>
  )
}
