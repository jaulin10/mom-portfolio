import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About"; // Assure-toi que About.jsx existe bien
import Skills from "./components/Experience";
import Portfolio from "./components/Interest";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ExperienceModal from "./components/ExperienceModal";
import InterestModal from "./components/InterestModal";
import ContactModal from "./components/ContactModal";

const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Fonction pour ouvrir les modales
  const openModal = (section) => {
    setActiveSection(section);
  };

  const closeSection = () => {
    setActiveSection(null);
  };

  return (
    <div className="relative font-sans">
      <Navbar onOpenModal={openModal} /> {/* Passe la fonction openModal ici */}
      <Hero onSelectSection={setActiveSection} />
      {/* Modale d'affichage de la section */}
      {activeSection === "about" && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white max-w-3xl w-full p-6 relative rounded-lg shadow-lg overflow-auto h-[80%]">
            <button
              className="absolute top-4 right-4 text-2xl text-black hover:text-red-600"
              onClick={closeSection}
            >
              &times;
            </button>
            <About />
          </div>
        </div>
      )}
      {/* Affichage des autres modales */}
      {activeSection === "experiences" && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white max-w-3xl w-full p-6 relative rounded-lg shadow-lg overflow-auto h-[80%]">
            <button
              className="absolute top-4 right-4 text-2xl text-black hover:text-red-600"
              onClick={closeSection}
            >
              &times;
            </button>
            <ExperienceModal onClose={closeSection} />
          </div>
        </div>
      )}
      {activeSection === "interests" && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white max-w-3xl w-full p-6 relative rounded-lg shadow-lg overflow-auto h-[80%]">
            <button
              className="absolute top-4 right-4 text-2xl text-black hover:text-red-600"
              onClick={closeSection}
            >
              &times;
            </button>
            <InterestModal onClose={closeSection} />
          </div>
        </div>
      )}
      {activeSection === "contact" && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white max-w-3xl w-full p-6 relative rounded-lg shadow-lg overflow-auto h-[80%]">
            <button
              className="absolute top-4 right-4 text-2xl text-black hover:text-red-600"
              onClick={closeSection}
            >
              &times;
            </button>
            <ContactModal onClose={closeSection} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
