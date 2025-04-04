const TrustedBy = () => {
  const partners = [
    { name: "THORChain", logo: "thorchain-logo.png" },
    { name: "DeFi Suisse", logo: "defi-suisse-logo.png" },
    { name: "ZKFinance", logo: "zkfinance-logo.png" },
    { name: "Vultisig Treasury", logo: "vultisig-logo.png" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          TRUSTED BY THE BEST
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:scale-105 transition-transform"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 max-w-24 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
