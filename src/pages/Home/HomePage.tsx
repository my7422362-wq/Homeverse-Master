import { HeroSection } from '../../components/sections/Hero/HeroSection'
import { AboutSection } from '../../components/sections/About/AboutSection'

import { FeaturedLuxuryPropertiesSection } from '../../components/sections/FeaturedLuxuryProperties'
import { WhyChooseUsSection } from '../../components/sections/WhyChooseUsSection/WhyChooseUsSection'
import { ExclusiveExperience } from '../../components/sections/ExclusiveExperience/ExclusiveExperience'
import { ExploreDestinations } from '../../components/sections/ExploreDestinations/ExploreDestinations'
import { LatestInsights } from '../../components/sections/LatestInsights/LatestInsights'
import { LuxuryLifestyle } from '../../components/sections/LuxuryLifestyle/LuxuryLifestyle'
import { ExpertAdvisors } from '../../components/sections/ExpertAdvisors/ExpertAdvisors'
import { LuxuryContact } from '../../components/sections/LuxuryContact/LuxuryContact'

export function HomePage() {

  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />

        <WhyChooseUsSection />
        <FeaturedLuxuryPropertiesSection />
        <ExclusiveExperience />
        <ExploreDestinations />
        <LatestInsights />
        <LuxuryLifestyle />
        <ExpertAdvisors />
        <LuxuryContact />
      </main>
    </>
  )
}



