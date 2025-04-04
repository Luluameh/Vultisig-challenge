import { motion } from "framer-motion";

const ChainSupport = () => {
  const chains = [
    { name: "Ethereum", icon: "🟣", color: "#627EEA" },
    { name: "Bitcoin", icon: "🟠", color: "#F7931A" },
    { name: "Solana", icon: "🔵", color: "#00FFA3" },
    { name: "Polygon", icon: "🟣", color: "#8247E5" },
    { name: "Avalanche", icon: "🔴", color: "#E84142" },
    { name: "BNB Chain", icon: "🟡", color: "#F0B90B" },
  ];

  return (
    <section className="py-20 bg-[#061B3A]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          <span className="text-[#33E6BF]">Multi-Chain</span> by Design
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Secure assets across all major blockchains with a single vault
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {chains.map((chain, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-[#11284A] p-6 rounded-xl border border-[#11284A] hover:border-[#33E6BF]/30 transition-colors"
            >
              <div className="text-4xl mb-3" style={{ color: chain.color }}>
                {chain.icon}
              </div>
              <h3 className="text-white font-medium">{chain.name}</h3>
            </motion.div>
          ))}
        </div>

        <button className="mt-12 px-8 py-3 border border-[#33E6BF] text-[#33E6BF] rounded-lg hover:bg-[#33E6BF]/10 transition-colors">
          View All Supported Chains
        </button>
      </div>
    </section>
  );
};

export default ChainSupport;
