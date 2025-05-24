import React, { useState } from "react";
import bgImage from "../assets/img/photo.jpg";
import Navbar from "./Navbar";
import AboutModal from "./AboutModal";
import ExperienceModal from "./ExperienceModal";
import InterestModal from "./InterestModal";
import ContactModal from "./ContactModal";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaSpotify,
  FaYoutube,
  FaBookOpen,
} from "react-icons/fa";

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <>
      {/* Masquer Hero si AboutModal est ouvert */}
      {!isModalOpen && (
        <section
          id="home"
          className="fixed inset-0 bg-cover bg-center flex flex justify-center items-center z-50"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="bg-black bg-opacity-50 p-8 p-8 w-full max-w-6xl">
            {/* Flex row pour contenu + séparateur + navbar */}
            <div className="flex flex-row items-center">
              {/* Colonne gauche : Texte */}
              <div className="flex-1 text-white pr-8">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Hello! <br /> I'm Jaulin Nanfack
                </h1>
                <p className="text-lg mt-4">
                  I am passionate about Software Engineering and Artificial
                  Intelligence.
                </p>

                <div className="flex flex-wrap gap-4 mt-6 text-2xl ">
                  <a
                    href="https://www.linkedin.com/in/jaulin-nanfack/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/jaulin10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-900 transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="mailto:n.jaulin2016@gmail.com"
                    className="text-red-600 hover:text-red-700 transition"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href="https://open.spotify.com/user/tonspotify"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-600 transition"
                  >
                    <FaSpotify />
                  </a>
                  <a
                    href="https://youtube.com/@ta_chaine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-600 transition"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="https://www.goodreads.com/user/show/tonprofil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 transition"
                  >
                    <FaBookOpen />
                  </a>
                </div>
              </div>

              {/* Séparateur vertical */}
              <div className="w-[2px] h-64 bg-white opacity-30 mx-8"></div>

              {/* Colonne droite : Navbar + Icônes */}
              <div className="w-64">
                <Navbar onOpenModal={openModal} />
              </div>
            </div>
          </div>

          {/* Affichage de la modale si isModalOpen est true */}
          {isModalOpen && <AboutModal onClose={closeModal} />}
        </section>
      )}

      {/* Afficher le AboutModal en plein écran si isModalOpen est true */}
      {isModalOpen && (
        <>
          {modalType === "about" && <AboutModal onClose={closeModal} />}
          {modalType === "experiences" && (
            <ExperienceModal onClose={closeModal} />
          )}
          {modalType === "interests" && <InterestModal onClose={closeModal} />}
          {modalType === "contact" && <ContactModal onClose={closeModal} />}
        </>
      )}
    </>
  );
};

export default Hero;
