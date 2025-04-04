const ProblemSection = () => {
  const problems = [
    {
      title: "Single-signature wallets are dangerous",
      description:
        "One mistake - lost phone, phishing site, trojan - and your funds are gone forever.",
      icon: "⚠️",
    },
    {
      title: "Hardware wallets are clunky",
      description:
        "Small screens, confusing interfaces, scary firmware updates. Why can't it be better?",
      icon: "🔧",
    },
    {
      title: "Multi-signature wallets are painful",
      description:
        "Different setups for different chains make a single UX impossible.",
      icon: "😫",
    },
  ];

  return (
    <section id="problem" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          WHAT'S WRONG WITH CURRENT WALLETS?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-vult-accent mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
