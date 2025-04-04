import { useState } from "react";
import Logo from "../Assets/Icon_white.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#061B3A]/80 backdrop-blur-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Vultisig" className="h-8" />
          <span className="ml-2 text-2xl font-bold text-white">Vultisig</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-white">
          <a href="#product" className="hover:text-[#33E6BF] transition-colors">
            Product
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#33E6BF] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#backed-by"
            className="hover:text-[#33E6BF] transition-colors"
          >
            Backed By
          </a>
          <a href="#docs" className="hover:text-[#33E6BF] transition-colors">
            Docs
          </a>
          <a href="#vult" className="hover:text-[#33E6BF] transition-colors">
            $VULT
          </a>
        </div>

        <button className="hidden md:block bg-gradient-to-r from-[#33E6BF] to-[#0439C7] text-white font-medium py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
          Download App
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#11284A] px-4 py-4 text-white">
          <div className="flex flex-col space-y-4">
            <a href="#product" className="hover:text-[#33E6BF]">
              Product
            </a>
            <a href="#how-it-works" className="hover:text-[#33E6BF]">
              How It Works
            </a>
            <a href="#backed-by" className="hover:text-[#33E6BF]">
              Backed By
            </a>
            <a href="#docs" className="hover:text-[#33E6BF]">
              Docs
            </a>
            <a href="#vult" className="hover:text-[#33E6BF]">
              $VULT
            </a>
            <button className="bg-gradient-to-r from-[#33E6BF] to-[#0439C7] text-white font-medium py-2 px-6 rounded-lg hover:opacity-90 transition-opacity self-start">
              Download App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
