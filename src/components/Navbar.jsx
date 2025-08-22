import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Check } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [phoneNumberCopied, setPhoneNumberCopied] = useState(false);

  const phoneNumber = "+880 1911-287729";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setPhoneNumberCopied(true);
      setTimeout(() => setPhoneNumberCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy phone number:", err);
    }
  };

  const navLinks = [
    { to: "/about", label: "About Us" },
    { to: "/packages", label: "Packages" },
    { to: "/contact", label: "Contact Us" },
  ];

  const navbarClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
    ${
      isScrolled
        ? "bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg"
        : "bg-transparent"
    }
  `;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="group transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col leading-[0.5]">
              <span className="text-xl lg:text-2xl font-bold font-['Roboto_Condensed'] text-primary group-hover:text-secondary transition-colors duration-300">
                Beautiful Bangladesh
              </span>
              <span className="text-xs lg:text-sm font-medium font-['Roboto_Condensed'] text-primary opacity-100 group-hover:opacity-100 transform translate-y-[1px] group-hover:translate-y-0 transition-all duration-300 ease-out group-hover:text-secondary tracking-wide">
                Tours and Travels
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${
                  isScrolled ? "text-primary" : "text-white"
                } hover:text-primary font-medium transition-colors duration-300 relative group`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Book Now Button */}
            <Link
              to="/book"
              className="bg-gradient-to-r from-primary to-secondary text-gray-800 px-6 py-2.5 rounded-full font-semibold 
                       hover:shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5 
                       transition-all duration-300 border border-primary/20"
            >
              Book Now
            </Link>

            {/* Phone Number Button */}
            <button
              onClick={copyPhoneNumber}
              className="bg-white/20 backdrop-blur-sm text-gray-800 px-4 py-2.5 rounded-full 
                       hover:bg-white/30 transition-all duration-300 flex items-center space-x-2
                       border border-white/30 hover:shadow-lg"
              title="Click to copy phone number"
            >
              {phoneNumberCopied ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Phone className="w-4 h-4" />
              )}
              <span className="text-sm font-medium hidden xl:inline">
                {phoneNumberCopied ? "Copied!" : phoneNumber}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-300 rounded-lg shadow-md"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
          }
        `}
        >
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xl">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-gray-50 text-gray-800 hover:bg-primary hover:text-white font-medium transition-all duration-300 py-3 px-4 rounded-lg text-center shadow-sm"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Book Now Button */}
              <Link
                to="/book"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold 
                         text-center hover:shadow-lg transition-all duration-300 shadow-md"
              >
                Book Now
              </Link>

              {/* Mobile Phone Button */}
              <button
                onClick={() => {
                  copyPhoneNumber();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg 
                         hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2
                         shadow-md font-medium"
              >
                {phoneNumberCopied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Phone className="w-4 h-4" />
                    <span>{phoneNumber}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
