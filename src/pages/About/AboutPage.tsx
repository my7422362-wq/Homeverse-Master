import { AboutSection } from '../../components/sections/About/AboutSection'
import { FeaturesSection } from '../../components/sections/FeaturesSection/FeaturesSection'
import { ServiceSection } from '../../components/sections/ServiceSection/ServiceSection'


export function AboutPage() {
  return (
    <main>
      <AboutSection />
      <ServiceSection />
      <FeaturesSection />
    </main>
  )
}

