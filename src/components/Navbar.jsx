import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#"
            className={`text-2xl font-bold ${
              isScrolled ? "text-[#D9A7B3]" : "text-white"
            }`}
          >
            LASH STUDIO
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#services"
            className={`${
              isScrolled ? "text-[#3C3C3C]" : "text-white"
            } hover:text-[#D9A7B3] transition-colors`}
          >
            Services
          </a>
          <a
            href="#booking"
            className={`${
              isScrolled ? "text-[#3C3C3C]" : "text-white"
            } hover:text-[#D9A7B3] transition-colors`}
          >
            Book
          </a>
          <a
            href="#about"
            className={`${
              isScrolled ? "text-[#3C3C3C]" : "text-white"
            } hover:text-[#D9A7B3] transition-colors`}
          >
            About
          </a>
          <a
            href="#gallery"
            className={`${
              isScrolled ? "text-[#3C3C3C]" : "text-white"
            } hover:text-[#D9A7B3] transition-colors`}
          >
            Gallery
          </a>
          <a
            href="#pricing"
            className={`${
              isScrolled ? "text-[#3C3C3C]" : "text-white"
            } hover:text-[#D9A7B3] transition-colors`}
          >
            Pricing
          </a>
          <a
            href="#faq"
            className={`${
              isScrolled ? "text-[#3C3C3C]" : "text-white"
            } hover:text-[#D9A7B3] transition-colors`}
          >
            FAQ
          </a>
          <a
            href="#contact"
            className={`${
              isScrolled ? "text-[#3C3C3C]" : "text-white"
            } hover:text-[#D9A7B3] transition-colors`}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${
              isScrolled ? "text-[#3C3C3C]" : "text-white"
            } focus:outline-none`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <a
            href="#booking"
            className="px-6 py-2 bg-[#D9A7B3] text-white rounded-full hover:bg-[#FFD1DC] transition-colors text-center shadow-md transform hover:scale-105 duration-300"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="flex flex-col p-4 space-y-3">
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#3C3C3C] hover:text-[#D9A7B3] transition-colors py-2"
            >
              Services
            </a>
            <a
              href="#booking"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#3C3C3C] hover:text-[#D9A7B3] transition-colors py-2"
            >
              Book
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#3C3C3C] hover:text-[#D9A7B3] transition-colors py-2"
            >
              About
            </a>
            <a
              href="#gallery"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#3C3C3C] hover:text-[#D9A7B3] transition-colors py-2"
            >
              Gallery
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#3C3C3C] hover:text-[#D9A7B3] transition-colors py-2"
            >
              Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#3C3C3C] hover:text-[#D9A7B3] transition-colors py-2"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#3C3C3C] hover:text-[#D9A7B3] transition-colors py-2"
            >
              Contact
            </a>
            <a
              href="#booking"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-2 bg-[#D9A7B3] text-white rounded-full hover:bg-[#FFD1DC] transition-colors text-center mt-4"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
