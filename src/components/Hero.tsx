import { ArrowRight, Shield, Layers, LockKeyhole } from "lucide-react";
import bg from "../Assets/Background 2 light.png";

const Hero = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:pt-32 md:pb-24 bg-[#02122B] relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bg})`,
            opacity: 0.15,
          }}
        ></div>
        <div className="absolute inset-0 bg-[#02122B] bg-opacity-85"></div>
      </div>

      {/* Background gradient circles */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#2155DF]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#33E6BF]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-gradient-to-r from-[#33E6BF]/20 to-[#0439C7]/20 px-4 py-2 rounded-full">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#33E6BF] to-[#2155DF] font-medium">
                VULTISIG AIRDROP IS LIVE!
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Regain Control with the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#33E6BF] to-[#2155DF]">
                Seedless, Multi-Chain
              </span>{" "}
              Crypto Vault
            </h1>

            <p className="text-lg text-gray-300 md:pr-12">
              Don't miss your chance to claim your share of $VULT and be part of
              the future of wallet security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-[#33E6BF] to-[#0439C7] text-white font-medium py-3 px-8 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
                Go to Airdrop <ArrowRight size={16} className="ml-2" />
              </button>

              <button className="border border-[#2155DF] text-white font-medium py-3 px-8 rounded-lg hover:bg-[#2155DF]/10 transition-colors flex items-center justify-center">
                Download App
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center">
                <Shield className="text-[#33E6BF] mr-2" size={20} />
                <span className="text-sm text-gray-300">
                  Open-Source Audited
                </span>
              </div>
              <div className="flex items-center">
                <Layers className="text-[#33E6BF] mr-2" size={20} />
                <span className="text-sm text-gray-300">
                  Multi-Chain Support
                </span>
              </div>
              <div className="flex items-center">
                <LockKeyhole className="text-[#33E6BF] mr-2" size={20} />
                <span className="text-sm text-gray-300">Seedless Security</span>
              </div>
            </div>
          </div>

          <div className="relative h-64 md:h-96 lg:h-full">
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Phone mockup with app */}
                <div className="bg-[#11284A] rounded-3xl shadow-2xl shadow-[#33E6BF]/10 overflow-hidden border border-[#33E6BF]/20">
                  <div className="rounded-t-3xl bg-gradient-to-b from-[#11284A] to-[#061B3A] p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#33E6BF] to-[#0439C7] rounded-md flex items-center justify-center">
                        <div className="text-white text-xs">V</div>
                      </div>
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
                      <div className="text-2xl font-bold text-white mb-2">
                        $365,834.89
                      </div>
                      <div className="flex items-center justify-center text-green-400 text-sm">
                        <span>+2.4%</span>
                        <span className="ml-2">today</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="space-y-3">
                      <div className="bg-[#061B3A] p-3 rounded-lg flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-[#F7931A]"></div>
                          <span className="ml-2 text-white">Bitcoin</span>
                        </div>
                        <div className="text-white">2.45 BTC</div>
                      </div>
                      <div className="bg-[#061B3A] p-3 rounded-lg flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-[#627EEA]"></div>
                          <span className="ml-2 text-white">Ethereum</span>
                        </div>
                        <div className="text-white">18.32 ETH</div>
                      </div>
                      <div className="bg-[#061B3A] p-3 rounded-lg flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-[#33E6BF]"></div>
                          <span className="ml-2 text-white">VULT</span>
                        </div>
                        <div className="text-white">5,240 VULT</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#33E6BF] bg-opacity-20 rounded-full blur-md"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#2155DF] bg-opacity-20 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
