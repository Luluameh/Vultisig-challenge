import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Vultisig eliminated our exchange dependency while maintaining liquidity access.",
      author: "Alex C., DeFi Protocol",
      role: "Security Lead",
    },
    {
      quote:
        "The first wallet I trust with 7-figure holdings without constant anxiety.",
      author: "Maria K.",
      role: "Crypto Investor",
    },
    {
      quote: "Implemented across our treasury with unanimous board approval.",
      author: "James L.",
      role: "DAO Treasurer",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#02122B] to-[#061B3A]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Trusted by <span className="text-[#33E6BF]">Institutions</span> &
          Individuals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#11284A]/50 backdrop-blur-sm p-8 rounded-xl border border-[#33E6BF]/20"
            >
              <div className="text-[#33E6BF] text-5xl mb-4">"</div>
              <p className="text-white/90 mb-6">{testimonial.quote}</p>
              <div>
                <p className="text-white font-medium">{testimonial.author}</p>
                <p className="text-[#33E6BF] text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
