import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does seedless security work?",
      answer:
        "Vultisig uses threshold signatures to distribute key shards across your devices without ever creating a complete seed phrase.",
    },
    {
      question: "What happens if I lose a device?",
      answer:
        "You can recover access using your other authorized devices, with configurable threshold requirements.",
    },
    {
      question: "Is there mobile support?",
      answer:
        "Yes, Vultisig is available on both iOS and Android with full feature parity.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#061B3A] to-[#02122B]">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Frequently Asked <span className="text-[#33E6BF]">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#11284A] border border-[#11284A] hover:border-[#33E6BF]/30 rounded-xl p-6 transition-colors"
            >
              <h3 className="text-white font-medium text-lg mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
