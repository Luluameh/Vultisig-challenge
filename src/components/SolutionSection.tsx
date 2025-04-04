const SolutionSection = () => {
  const solutions = [
    {
      title: "Threshold Signatures",
      description: "Multiple devices to sign—no single point of failure.",
      icon: "🔐",
    },
    {
      title: "Familiar Hardware",
      description:
        "Use your phone, laptop, or tablet—no special devices needed.",
      icon: "📱",
    },
    {
      title: "Vault Shares",
      description:
        "No seed phrases. Store shares online safely and respawn anywhere!",
      icon: "♻️",
    },
  ];

  return (
    <section
      id="solution"
      className="py-16 bg-gradient-to-br from-vult-dark to-vult-dark-secondary"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          THE SOLUTION: VULTISIG
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition-all animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold text-vult-primary mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-300">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
