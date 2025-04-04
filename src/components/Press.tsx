import { motion } from "framer-motion";

const Press = () => {
  const logos = [
    { name: "CoinDesk", logo: "🟠" },
    { name: "Decrypt", logo: "🔵" },
    { name: "The Block", logo: "🟣" },
    { name: "Crypto Briefing", logo: "🟢" },
  ];

  return (
    <section className="py-16 bg-[#02122B]">
      <div className="container mx-auto px-6">
        <h3 className="text-sm uppercase text-[#33E6BF] text-center mb-4 tracking-widest">
          Featured In
        </h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {logos.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-4xl opacity-80 hover:opacity-100 transition-opacity"
            >
              {item.logo}
              <span className="sr-only">{item.name}</span>
            </motion.div>
          ))}
              </div>
              
      </div>
    </section>
  );
};

export default Press;
