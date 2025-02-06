import { useState } from "react";
import logo from "../assets/logo/logo.svg";
import { GoChevronDown } from "react-icons/go";
import { LuMenu } from "react-icons/lu";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Fundsphere" />
      </div>
      <div className="menuContainer">
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              Features <GoChevronDown />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a href="#">Feature 1</a>
                <a href="#">Feature 2</a>
                <a href="#">Feature 3</a>
              </div>
            )}
          </div>
          <a href="#">Pricing</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <div className="actions open">
            <button className="signin">Sign in</button>
            <button className="trial">Free Trial</button>
          </div>
        </div>

        <div className="actions">
          <button className="signin">Sign in</button>
          <button className="trial">Free Trial</button>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <LuMenu />
      </div>
    </nav>
  );
};

export default Navbar;
