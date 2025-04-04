
const Comparison = () => {
  const features = [
    {
      feature: "Seedless Design",
      vultisig: "✅",
      others: "❌",
    },
    {
      feature: "Multi-Chain Support",
      vultisig: "✅ All Chains",
      others: "❌ Limited",
    },
    {
      feature: "Institutional Security",
      vultisig: "✅ Threshold Sig",
      others: "❌ Single Key",
    },
    {
      feature: "Open Source",
      vultisig: "✅ Fully Audited",
      others: "❌ Closed Source",
    },
  ];

  return (
    <section className="py-20 bg-[#061B3A]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Why <span className="text-[#33E6BF]">Vultisig</span> Stands Out
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Comparing security architecture with traditional wallets
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#33E6BF]/30">
                <th className="text-left py-4 text-white/80 font-medium">
                  Security Feature
                </th>
                <th className="text-center py-4 text-[#33E6BF] font-bold">
                  Vultisig
                </th>
                <th className="text-center py-4 text-white/80 font-medium">
                  Other Wallets
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-[#11284A] hover:bg-[#11284A]/50"
                >
                  <td className="py-5 text-white">{item.feature}</td>
                  <td className="text-center text-[#33E6BF] font-medium">
                    {item.vultisig}
                  </td>
                  <td className="text-center text-white/70">{item.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
export default Comparison;
