import { ArrowRight, Bot, Cpu, ShieldHalf, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import BG1 from "../Assets/Background 1 light (1).png";
import BotReading from "../Assets/Vulti Agent Reading (2).png";

const AISecuritySection = () => {
  return (
    <section className="relative py-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG1}
          alt="AI Security Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061B3A]/90 via-[#061B3A]/70 to-[#02122B]/90" />
      </div>

      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#33E6BF]/10"
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Massive AI Bot Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative aspect-square max-w-[600px] mx-auto">
              <img
                src={BotReading}
                alt="Vultisig AI Security"
                className="absolute inset-0 w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02122B]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating indicators */}
              <motion.div
                className="absolute top-1/4 left-1/4 bg-[#33E6BF]/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-[#33E6BF]"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Threat Analysis
              </motion.div>
              
              <motion.div
                className="absolute bottom-1/4 right-1/4 bg-[#2155DF]/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-[#2155DF]"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                Active Protection
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <motion.div
                className="inline-flex items-center px-5 py-2.5 bg-[#33E6BF]/10 text-[#33E6BF] rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="mr-3" size={20} />
                <span className="font-medium">AI-Enhanced Security</span>
              </motion.div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Military-Grade <span className="text-[#33E6BF]">AI Protection</span> for Your Assets
              </h2>
              
              <p className="text-xl text-white/80 mb-8 max-w-lg">
                Vultisig's AI guardian works 24/7 to detect and neutralize threats before they reach your multi-chain vault.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-start bg-[#11284A]/70 backdrop-blur-md p-6 rounded-2xl border border-[#33E6BF]/20 hover:border-[#33E6BF]/40 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="bg-[#33E6BF]/10 p-4 rounded-xl mr-6 flex-shrink-0">
                  <Bot className="text-[#33E6BF]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Behavioral Intelligence</h3>
                  <p className="text-white/80">
                    Our AI establishes your transaction fingerprints and alerts you to any deviations in real-time.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start bg-[#11284A]/70 backdrop-blur-md p-6 rounded-2xl border border-[#33E6BF]/20 hover:border-[#33E6BF]/40 transition-all"
                whileHover={{ y: -5 }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-[#33E6BF]/10 p-4 rounded-xl mr-6 flex-shrink-0">
                  <Cpu className="text-[#33E6BF]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Threat Prediction</h3>
                  <p className="text-white/80">
                    Analyzes millions of data points to identify emerging attack patterns across all chains.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start bg-[#11284A]/70 backdrop-blur-md p-6 rounded-2xl border border-[#33E6BF]/20 hover:border-[#33E6BF]/40 transition-all"
                whileHover={{ y: -5 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-[#33E6BF]/10 p-4 rounded-xl mr-6 flex-shrink-0">
                  <ShieldHalf className="text-[#33E6BF]" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Adaptive Defense</h3>
                  <p className="text-white/80">
                    Continuously evolves its protection models without compromising your privacy.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="pt-4"
            >
              <button className="w-full lg:w-auto px-8 py-4 bg-gradient-to-r from-[#33E6BF] to-[#0439C7] text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-3">
                Explore AI Security
                <ArrowRight className="ml-1" size={20} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISecuritySection;