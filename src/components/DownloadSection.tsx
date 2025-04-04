import React from "react";
import phone from '../Assets/phone.webp'
import bg from '../Assets/Background 2 light.png'
import eth from '../Assets/eth-dynamic-color.svg'
import dollar from '../Assets/dollar-dollar-color.svg'
import yun from '../Assets/yuan-dynamic-color.svg'
const DownloadSection = () => {
  return (
    <section className="py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#061B3A]/90 to-[#02122B]/95"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Phone Mockup */}
          <div className="lg:w-1/2 relative">
            <div className="relative max-w-xs mx-auto">
              {/* Phone Image */}
              <img
                src={phone}
                alt="Phone mockup"
                className="relative z-10 rounded-[40px] shadow-2xl border-2 border-[#33E6BF]/20"
              />

              {/* App Screenshot Overlay (positioned absolutely on top of the phone) */}
              <div className="absolute top-[10%] left-[10%] right-[10%] bottom-[10%] z-20 rounded-[30px] overflow-hidden">
                <img
                  src={phone}
                  alt="App screenshot"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-[#33E6BF] rounded-[50px] opacity-20 blur-2xl"></div>

              {/* Floating Coin Icons */}
              <div className="absolute -top-8 -left-8 z-30">
                <img
                  src={dollar}
                  alt="Crypto coin"
                  className="w-16 h-16 rounded-full"
                />
              </div>

              <div className="absolute top-1/3 -right-10 z-30">
                <img
                  src={eth}
                  alt="Crypto coin"
                  className="w-20 h-20 rounded-full"
                />
              </div>

              <div className="absolute bottom-1/4 -left-12 z-30">
                <img
                  src={yun}
                  alt="Crypto coin"
                  className="w-18 h-18 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Download CTA */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-[#33E6BF]/10 text-[#33E6BF] rounded-full mb-4">
              <span className="font-mono font-bold text-2xl">08</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Download the <span className="text-[#33E6BF]">crypto wallet</span>
              <br />
              of the future, today.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button className="px-6 py-3 bg-[#11284A] hover:bg-[#11284A]/80 rounded-lg flex items-center justify-center gap-2 transition-all">
                <AppleIcon className="w-6 h-6 text-[#33E6BF]" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download for</p>
                  <p className="text-white font-medium">iOS</p>
                </div>
              </button>
              <button className="px-6 py-3 bg-[#11284A] hover:bg-[#11284A]/80 rounded-lg flex items-center justify-center gap-2 transition-all">
                <AndroidIcon className="w-6 h-6 text-[#33E6BF]" />
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download for</p>
                  <p className="text-white font-medium">Android</p>
                </div>
              </button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-5 h-5 text-[#33E6BF]" />
                <span className="text-gray-300">Seedless security</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon className="w-5 h-5 text-[#33E6BF]" />
                <span className="text-gray-300">Multi-chain support</span>
              </div>
              <div className="flex items-center gap-2">
                <LockOpenIcon className="w-5 h-5 text-[#33E6BF]" />
                <span className="text-gray-300">Open source</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Type definition for icon components
interface IconProps {
  className?: string;
}

// Icon components with proper TypeScript typing
const AppleIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const AndroidIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
  </svg>
);

const ShieldCheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const LinkIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
    />
  </svg>
);

const LockOpenIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
    />
  </svg>
);

export default DownloadSection;
