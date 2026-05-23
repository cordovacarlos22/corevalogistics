import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatsBar from './components/StatsBar'
import DivisionsSection from './components/DivisionsSection'
import ServicesSection from './components/ServicesSection'
import WhyCorevaSection from './components/WhyCorevaSection'
import RouteMapSection from './components/RouteMapSection'
import OperationsSection from './components/OperationsSection'
import TechSection from './components/TechSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <DivisionsSection />
        <ServicesSection />
        <WhyCorevaSection />
        <RouteMapSection />
        <OperationsSection />
        <TechSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
