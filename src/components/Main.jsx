import { AboutSection } from "./AboutSection"
import { AltServicesSection } from "./AltServicesSection"
import { ClientsSection } from "./ClientsSection"
import { ContactSection } from "./ContactSection"
import { FaqSection } from "./FaqSection"
import { FeaturesSection } from "./FeaturesSection"
import { HeroSection } from "./HeroSection"
import { PortfolioSection } from "./PortfolioSection"
import { PricingSection } from "./PricingSection"
import { ServicesSection } from "./ServicesSection"
import { StatsSection } from "./StatsSection"
import { TeamSection } from "./TeamSection"
import { TestimonialsSection } from "./TestimonialsSection"


export const Main = ()=>{
    return(
    <main className="main">
      {/*HERO SECTION */}
      <HeroSection/>

      {/* <!-- Clients Section --> */}
      <ClientsSection/>
      {/* <!-- /Clients Section --> */}

      {/* <!-- About Section --> */}
      <AboutSection/>
      {/* <!-- /About Section --> */}

      {/* <!-- Stats Section --> */}
      <StatsSection/>
      {/* <!-- /Stats Section --> */}

      {/* <!-- Services Section --> */}
      <ServicesSection/>
      {/* <!-- /Services Section --> */}

      {/* <!-- Alt Services Section --> */}
      <AltServicesSection/>
      {/* <!-- /Alt Services Section --> */}

      {/* <!-- Features Section --> */}
      <FeaturesSection/>
      {/* <!-- /Features Section --> */}

      {/* <!-- Testimonials Section --> */}
      <TestimonialsSection/>
      {/* <!-- /Testimonials Section --> */}

      {/* <!-- Portfolio Section --> */}
      <PortfolioSection/>
      {/* <!-- /Portfolio Section --> */}

      {/* <!-- Team Section --> */}
      <TeamSection/>
      {/* <!-- /Team Section --> */}

      {/* <!-- Pricing Section --> */}
      <PricingSection/>
      {/* <!-- /Pricing Section --> */}

      {/* <!-- Faq Section --> */}
      <FaqSection/>
      {/* <!-- /Faq Section --> */}

      {/* <!-- Contact Section --> */}
      <ContactSection/>
      {/* <!-- /Contact Section --> */}
    </main>
    )
}