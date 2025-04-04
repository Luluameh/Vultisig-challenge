
const SecurityJourney = () => {
  const transportItems = [
    {
      icon: "🚢",
      title: "Multi-Chain Bridges",
      description:
        "Safely navigate between blockchains like ships crossing oceans",
      color: "from-[#33E6BF] to-[#2155DF]",
    },
    {
      icon: "🚛",
      title: "Transaction Highways",
      description: "Secure transfer routes with military-grade encryption",
      color: "from-[#0439C7] to-[#33E6BF]",
    },
    {
      icon: "✈️",
      title: "Lightning Fast",
      description:
        "Air-speed transaction processing without compromising security",
      color: "from-[#2155DF] to-[#0439C7]",
    },
    {
      icon: "🚄",
      title: "Enterprise-Grade",
      description: "Rail-like precision for institutional asset management",
      color: "from-[#33E6BF] to-[#061B3A]",
    },
  ];

  return (
    <section className="py-20 bg-[#02122B]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Your Security Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            How Vultisig transports your assets with maximum protection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transportItems.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.color} rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="text-5xl mb-5">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-200">{item.description}</p>

              {/* Animated track/dotted line connector between items */}
              {index !== transportItems.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-1 bg-[#33E6BF] relative">
                    <span className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-[#33E6BF]">
                      →
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Animated "road" connecting all elements on desktop */}
        <div className="hidden lg:block relative mt-10">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#33E6BF] via-[#2155DF] to-[#0439C7] opacity-30"></div>
          <div className="flex justify-between px-10">
            {transportItems.map((_, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full bg-[#33E6BF] relative -top-1.5"
              >
                <div className="animate-ping absolute inset-0 rounded-full bg-[#33E6BF] opacity-75"></div>
              </div>
            ))}
          </div>
        </div>
          </div>
          
          <div className="mt-16 relative h-64 bg-[#061B3A] rounded-xl overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {/* Transport network lines animation */}
            <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-[#33E6BF] animate-pulse"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#2155DF] animate-pulse"></div>
            <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-[#0439C7] animate-pulse"></div>
          </div>
          
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center p-6 max-w-md">
              <h3 className="text-2xl font-bold text-white mb-3">End-to-End Encrypted Transport</h3>
              <p className="text-gray-300">
                Every movement of your assets is protected by our threshold signature technology,
                just like secure global logistics networks protect physical goods.
              </p>
            </div>
              </div>
              </div>
    </section>
  );
};

export default  SecurityJourney