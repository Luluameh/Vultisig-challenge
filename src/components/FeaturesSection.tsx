import { Download, Key, Smartphone, Users, CheckCircle, ArrowRight } from "lucide-react";
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
    <section className="relative py-20 bg-[#02122B] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How <span className="text-[#33E6BF]">Vultisig</span> Works
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get started in minutes with our intuitive, secure onboarding process
          </p>
        </div>

        <div className="relative h-[500px] md:h-[600px]">
          {/* Circular Path */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-2 border-dashed border-[#33E6BF]/30" />
          </div>

          {/* Central Phone Illustration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[200px] md:w-[250px]">
            <div className="relative bg-[#11284A] rounded-3xl p-3 border border-[#33E6BF]/20 shadow-xl">
              <div className="bg-[#061B3A] rounded-xl overflow-hidden aspect-[9/19.5] flex items-center justify-center">
                <Smartphone className="text-[#33E6BF]" size={48} />
              </div>
              <div className="absolute -top-3 -right-3 bg-[#33E6BF] text-[#02122B] rounded-full w-8 h-8 flex items-center justify-center">
                <span className="font-bold text-sm">4</span>
              </div>
            </div>
          </div>

          {/* Steps Around Circle */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`absolute ${step.position} z-20 w-[160px] md:w-[200px]`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-20px" }}
            >
              <div className="group cursor-pointer">
                {/* Mobile Preview */}
                <motion.div
                  className="relative bg-[#11284A] rounded-xl p-2 border border-[#33E6BF]/20 mb-3 shadow-lg"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-[#061B3A] rounded-lg overflow-hidden aspect-[9/16]">
                    {step.image ? (
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#061B3A] to-[#11284A]">
                        <div className="text-center p-4">
                          <div className="mx-auto bg-[#33E6BF]/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                            {step.icon}
                          </div>
                          <h3 className="text-white font-medium">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-[#33E6BF] text-[#02122B] rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </motion.div>

                {/* Step Info */}
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="bg-[#33E6BF]/10 p-2 rounded-full">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-white font-bold mb-1">{step.title}</h3>
                  <p className="text-white/80 text-sm">{step.description}</p>
                </div>
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
        <div className="text-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#33E6BF] to-[#0439C7] text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center mx-auto gap-3"
          >
            Get Started in 4 Easy Steps
            <ArrowRight className="ml-1" size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
