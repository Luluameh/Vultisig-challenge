import { useState, useEffect } from "react";
import Comparison from "./components/ComparisonTable";
import DownloadSection from "./components/DownloadSection";
import FAQ from "./components/FAQ";
import HowItWorks from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Press from "./components/Press";
import Testimonials from "./components/Testimonials";
import ChatBot from "./components/ChatBot";
import SecurityJourney from "./components/ SecurityJourney";
import AISecuritySection from "./components/AISecuritySection ";
import ChainSupport from "./components/ChainSupport ";

// Skeleton loader components
const SkeletonHeader = () => (
  <div className="w-full h-16 bg-gray-200 animate-pulse"></div>
);

const SkeletonHero = () => (
  <div className="w-full h-96 bg-gray-200 animate-pulse flex flex-col items-center justify-center">
    <div className="w-3/4 h-12 bg-gray-300 mb-6 rounded"></div>
    <div className="w-1/2 h-6 bg-gray-300 mb-4 rounded"></div>
    <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
  </div>
);

const SkeletonSection = () => (
  <div className="w-full py-12 px-4 bg-gray-100 animate-pulse">
    <div className="max-w-6xl mx-auto">
      <div className="w-1/3 h-8 bg-gray-200 mb-6 rounded"></div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 p-4">
          <div className="h-48 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 mt-4 rounded"></div>
          <div className="h-4 bg-gray-200 mt-2 w-2/3 rounded"></div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="h-48 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 mt-4 rounded"></div>
          <div className="h-4 bg-gray-200 mt-2 w-2/3 rounded"></div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="h-48 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 mt-4 rounded"></div>
          <div className="h-4 bg-gray-200 mt-2 w-2/3 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const SkeletonFooter = () => (
  <div className="w-full h-64 bg-gray-800 animate-pulse">
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4 mb-6">
          <div className="h-8 bg-gray-700 mb-4 w-1/2 rounded"></div>
          <div className="h-4 bg-gray-700 mb-2 w-3/4 rounded"></div>
          <div className="h-4 bg-gray-700 mb-2 w-3/4 rounded"></div>
        </div>
        <div className="w-full md:w-1/4 mb-6">
          <div className="h-8 bg-gray-700 mb-4 w-1/2 rounded"></div>
          <div className="h-4 bg-gray-700 mb-2 w-3/4 rounded"></div>
          <div className="h-4 bg-gray-700 mb-2 w-3/4 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time simulation

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="overflow-x-hidden">
        <SkeletonHeader />
        <SkeletonHero />
        <SkeletonSection />
        <SkeletonSection />
        <SkeletonSection />
        <SkeletonSection />
        <SkeletonFooter />
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <SecurityJourney />
      <AISecuritySection />
      <ChainSupport />
      <Comparison />
      <HowItWorks />
      <Testimonials />
      <DownloadSection />
      <Press />
      <FAQ />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
