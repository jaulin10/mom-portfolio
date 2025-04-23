// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-black text-white text-center">
      <p>&copy; 2025 Jaulin Nanfack's Portfolio. All rights reserved.</p>
      <div className="mt-4">
        <a
          href="https://www.linkedin.com/in/jaulin-nanfack/.com"
          className="mx-4 text-white hover:text-gray-400"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/jaulin10"
          className="mx-4 text-white hover:text-gray-400"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
