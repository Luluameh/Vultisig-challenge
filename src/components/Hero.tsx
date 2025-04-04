import { ArrowRight, Shield, Layers, LockKeyhole } from "lucide-react";
import { motion } from "framer-motion";
import bg from "../Assets/Background 2 light.png";

const Hero = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="pt-24 pb-16 px-4 md:pt-32 md:pb-24 bg-[#02122B] relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bg})`,
            opacity: 0.15,
          }}
        ></div>
        <motion.div
          className="absolute inset-0 bg-[#02122B]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Animated Gradient Circles */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-[#2155DF]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{
            x: ["-50%", "-55%", "-50%"],
            y: ["-50%", "-45%", "-50%"],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#33E6BF]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
          animate={{
            x: ["33%", "38%", "33%"],
            y: ["33%", "28%", "33%"],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="space-y-6" variants={container}>
            <motion.div
              variants={item}
              className="inline-block bg-gradient-to-r from-[#33E6BF]/20 to-[#0439C7]/20 px-4 py-2 rounded-full"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#33E6BF] to-[#2155DF] font-medium">
                VULTISIG AIRDROP IS LIVE!
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
              variants={item}
            >
              Regain Control with the{" "}
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#33E6BF] to-[#2155DF]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Seedless, Multi-Chain
              </motion.span>{" "}
              Crypto Vault
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 md:pr-12"
              variants={item}
            >
              Don't miss your chance to claim your share of $VULT and be part of
              the future of wallet security.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={item}
            >
              <motion.button
                className="bg-gradient-to-r from-[#33E6BF] to-[#0439C7] text-white font-medium py-3 px-8 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Go to Airdrop <ArrowRight size={16} className="ml-2" />
              </motion.button>

              <motion.button
                className="border border-[#2155DF] text-white font-medium py-3 px-8 rounded-lg hover:bg-[#2155DF]/10 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download App
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8"
              variants={container}
            >
              <motion.div
                className="flex items-center"
                variants={item}
                whileHover={{ x: 5 }}
              >
                <Shield className="text-[#33E6BF] mr-2" size={20} />
                <span className="text-sm text-gray-300">
                  Open-Source Audited
                </span>
              </motion.div>
              <motion.div
                className="flex items-center"
                variants={item}
                whileHover={{ x: 5 }}
              >
                <Layers className="text-[#33E6BF] mr-2" size={20} />
                <span className="text-sm text-gray-300">
                  Multi-Chain Support
                </span>
              </motion.div>
              <motion.div
                className="flex items-center"
                variants={item}
                whileHover={{ x: 5 }}
              >
                <LockKeyhole className="text-[#33E6BF] mr-2" size={20} />
                <span className="text-sm text-gray-300">Seedless Security</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-64 md:h-96 lg:h-full"
            variants={item}
          >
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <motion.div
                className="relative w-full max-w-sm"
                variants={floatingVariants}
                animate="float"
              >
                {/* Phone mockup with app */}
                <motion.div
                  className="bg-[#11284A] rounded-3xl shadow-2xl shadow-[#33E6BF]/10 overflow-hidden border border-[#33E6BF]/20"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(51, 230, 191, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="rounded-t-3xl bg-gradient-to-b from-[#11284A] to-[#061B3A] p-6">
                    <div className="flex items-center mb-6">
                      <motion.div
                        className="w-8 h-8 bg-gradient-to-r from-[#33E6BF] to-[#0439C7] rounded-md flex items-center justify-center"
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <div className="text-white text-xs">V</div>
                      </motion.div>
                      <div className="ml-3">
                        <div className="text-white font-bold">
                          Vultisig Vault
                        </div>
                        <div className="text-gray-400 text-xs">
                          Your digital assets secured
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-1">
                        Total Balance
                      </div>
                      <motion.div
                        className="text-2xl font-bold text-white mb-2"
                        animate={{
                          scale: [1, 1.02, 1],
                          opacity: [1, 0.9, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      >
                        $365,834.89
                      </motion.div>
                      <motion.div
                        className="flex items-center justify-center text-green-400 text-sm"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                      >
                        <span>+2.4%</span>
                        <span className="ml-2">today</span>
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      {[
                        {
                          coin: "Bitcoin",
                          amount: "2.45 BTC",
                          color: "#F7931A",
                        },
                        {
                          coin: "Ethereum",
                          amount: "18.32 ETH",
                          color: "#627EEA",
                        },
                        {
                          coin: "VULT",
                          amount: "5,240 VULT",
                          color: "#33E6BF",
                        },
                      ].map((crypto, i) => (
                        <motion.div
                          key={i}
                          className="bg-[#061B3A] p-3 rounded-lg flex items-center justify-between"
                          whileHover={{
                            backgroundColor: "rgba(6, 27, 58, 0.8)",
                            borderLeft: "2px solid #33E6BF",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-center">
                            <div
                              className="w-6 h-6 rounded-full"
                              style={{ backgroundColor: crypto.color }}
                            />
                            <span className="ml-2 text-white">
                              {crypto.coin}
                            </span>
                          </div>
                          <div className="text-white">{crypto.amount}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-16 h-16 bg-[#33E6BF] bg-opacity-20 rounded-full blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#2155DF] bg-opacity-20 rounded-full blur-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
