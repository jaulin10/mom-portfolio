import React from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icônes pour le menu burger

const Navbar = ({ onOpenModal }) => {
  return (
    <nav className="flex flex-col items-center gap-6 text-white text-lg">
      <a
        onClick={() => onOpenModal("about")}
        className="hover:text-purple-600 cursor-pointer"
      >
        About Me
      </a>
      <a
        onClick={() => onOpenModal("experiences")}
        className="hover:text-purple-600 cursor-pointer"
      >
        Projects
      </a>
      <a
        onClick={() => onOpenModal("interests")}
        className="hover:text-purple-600 cursor-pointer"
      >
        Services
      </a>
      <a
        onClick={() => onOpenModal("contact")}
        className="hover:text-purple-600 cursor-pointer"
      >
        Contact Me
      </a>
    </nav>
  );
};

export default Navbar;
