import SecurityJourney from "./components/ SecurityJourney";
import AISecuritySection from "./components/AISecuritySection ";
import ChainSupport from "./components/ChainSupport ";
import Comparison from "./components/ComparisonTable";
import DownloadSection from "./components/DownloadSection";
import FAQ from "./components/FAQ";
import HowItWorks from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Press from "./components/Press";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <SecurityJourney />
      <AISecuritySection />
      <ChainSupport /> {/* New */}
      <Comparison /> {/* New */}
      <HowItWorks />
      <Testimonials /> {/* New */}
      <DownloadSection />
      <Press /> {/* New */}
      <FAQ /> {/* New */}
      <Footer />
    </div>
  );
}

export default App