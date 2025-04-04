import { Download, Key, Users, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Import your mobile screenshots
import Step1Download from "../Assets/onboarding-step1.png";
import Step2Address from "../Assets/onboarding-step2.png";
import Step3Setup from "../Assets/onboarding-step3.png";
import Step4Ready from "../Assets/onboarding-step4.png";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Download className="text-[#33E6BF]" size={24} />,
      title: "Download App",
      description: "Get Vultisig from App Store or Google Play",
      image: Step1Download,
      position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
      icon: <Key className="text-[#33E6BF]" size={24} />,
      title: "Create Vault",
      description: "Generate your secure multi-signature vault",
      image: Step2Address,
      position: "top-1/2 right-0 -translate-y-1/2 translate-x-1/2",
    },
    {
      icon: <Users className="text-[#33E6BF]" size={24} />,
      title: "Add Guardians",
      description: "Invite trusted devices to co-manage your vault",
      image: Step3Setup,
      position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    },
    {
      icon: <CheckCircle className="text-[#33E6BF]" size={24} />,
      title: "Start Securing",
      description: "Deposit assets with institutional-grade security",
      image: Step4Ready,
      position: "top-1/2 left-0 -translate-y-1/2 -translate-x-1/2",
    },
  ];

  return (
    <section className="relative py-8 md:py-20 bg-[#02122B] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">
            How <span className="text-[#33E6BF]">Vultisig</span> Works
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Get started in minutes with our intuitive, secure onboarding process
          </p>
        </div>

        {/* Mobile Linear Steps (for small screens) */}
        <div className="md:hidden mb-8">
          <div className="flex flex-col items-center space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="w-full max-w-[280px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="bg-[#33E6BF] text-[#02122B] rounded-full w-8 h-8 flex items-center justify-center mb-3 font-bold">
                    {index + 1}
                  </div>

                  {/* Step Info */}
                  <div className="flex justify-center mb-3">
                    <div className="bg-[#33E6BF]/10 p-2 rounded-full">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-white font-bold mb-1 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Mobile Preview */}
                  <div className="relative bg-[#11284A] rounded-xl p-2 border border-[#33E6BF]/20 shadow-lg w-[160px]">
                    <div className="bg-[#061B3A] rounded-lg overflow-hidden aspect-[9/16]">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Circular Layout (for medium screens and up) */}
        <div className="hidden md:block relative h-[400px] lg:h-[500px] xl:h-[600px]">
          {/* Circular Path */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] rounded-full border-2 border-dashed border-[#33E6BF]/30" />
          </div>

          {/* Central Phone Illustration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[180px] lg:w-[220px] xl:w-[250px]">
            <div className="relative bg-[#11284A] rounded-3xl p-3 border border-[#33E6BF]/20 shadow-xl">
              <div className="bg-[#061B3A] rounded-xl overflow-hidden aspect-[9/19.5] flex items-center justify-center">
                <img
                  src={Step1Download}
                  alt="Download App"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 bg-[#33E6BF] text-[#02122B] rounded-full w-8 h-8 flex items-center justify-center">
                <span className="font-bold text-sm">1</span>
              </div>
            </div>
          </div>

          {/* Steps Around Circle */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`absolute ${step.position} z-20 w-[160px] lg:w-[180px] xl:w-[200px]`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-20px" }}
            >
              <div className="group cursor-pointer flex flex-col items-center">
                {/* Step Info (now above the image) */}
                <div className="text-center mb-3 order-first">
                  <div className="flex justify-center mb-2">
                    <div className="bg-[#33E6BF]/10 p-2 rounded-full">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-white font-bold mb-1">{step.title}</h3>
                  <p className="text-white/80 text-sm">{step.description}</p>
                </div>

                {/* Mobile Preview (skip for step 1) */}
                {index !== 0 && (
                  <motion.div
                    className="relative bg-[#11284A] rounded-xl p-2 border border-[#33E6BF]/20 shadow-lg"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-[#061B3A] rounded-lg overflow-hidden aspect-[9/16]">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-[#33E6BF] text-[#02122B] rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Animated Connector Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {steps.map((_, index) => {
              const nextIndex = (index + 1) % steps.length;
              return (
                <motion.line
                  key={index}
                  x1={`${
                    50 + 35 * Math.cos((index * Math.PI) / 2 - Math.PI / 2)
                  }%`}
                  y1={`${
                    50 + 35 * Math.sin((index * Math.PI) / 2 - Math.PI / 2)
                  }%`}
                  x2={`${
                    50 + 35 * Math.cos((nextIndex * Math.PI) / 2 - Math.PI / 2)
                  }%`}
                  y2={`${
                    50 + 35 * Math.sin((nextIndex * Math.PI) / 2 - Math.PI / 2)
                  }%`}
                  stroke="#33E6BF"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                />
              );
            })}
          </svg>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 md:mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#33E6BF] to-[#0439C7] text-white font-semibold rounded-lg md:rounded-xl hover:opacity-90 transition-all flex items-center justify-center mx-auto gap-2 text-sm md:text-base"
          >
            Get Started in 4 Easy Steps
            <ArrowRight className="ml-1" size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
