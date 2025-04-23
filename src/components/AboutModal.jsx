// src/components/AboutModal.jsx
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import bgImage from "../assets/img/photo.jpg";
import profilePicture from "../assets/img/picture.jpg"; // Adjust the path as necessary
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaSpotify,
  FaYoutube,
  FaBookOpen,
} from "react-icons/fa";
import { BsJustify } from "react-icons/bs";

const AboutModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center flex justify-center items-center z-50"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl hover:text-red-500"
      >
        <FaTimes />
      </button>
      <div className="bg-white w-full h-full md:max-w-4xl md:h-auto rounded-2xl shadow-lg p-8 relative overflow-y-auto">
        {/* Bouton Fermer */}

        {/* Bloc texte + image */}
        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Texte à gauche */}
          <div className="flex-1 text-gray-700">
            <h2 className="text-2x1 font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed text-justify mb-4">
              Jaulin Nanfack Zanguim is a software engineer with extensive
              skills and experience developing large-scale software solutions.
              Passionate about the world of computer programming since the age
              of 18, he has specialized in various Java technologies throughout
              his career and is currently specializing in Artificial
              Intelligence.
            </p>
            <p className="text-lg leading-relaxed text-justify mb-4">
              In addition to his technical expertise, his academic background
              has provided him with the theoretical and practical knowledge
              necessary to solve complex problems with ease and precision. He
              holds a Bachelor's degree in Software Engineering. He is currently
              pursuing an Advanced Diploma in Artificial Intelligence and
              Software Engineering at Centennial College, a world-renowned
              Canadian engineering school.
            </p>
          </div>

          {/* Image à droite */}
          <div className="flex-shrink-0">
            <img
              src={profilePicture}
              alt="Profile"
              className="w-60 h-80 object-cover rounded-xl border-4 border-white shadow-md"
            />

            {/* Icônes sociales */}
            <div className="flex gap-4 mt-4 text-2xl">
              <a
                href="https://www.linkedin.com/in/jaulin-nanfack/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
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
        </div>

        {/* Texte sous l’image */}
        <div className=" text-gray-700">
          <p className="text-lg leading-relaxed text-justify mb-4">
            Jaulin has contributed to numerous projects in the IT sector,
            requiring a deep understanding of various technologies, such as
            system architecture, integration, and computer programming best
            practices. His contributions have been instrumental in positively
            impacting businesses of all sizes and delivering consumer
            applications to a wide range of users.
          </p>
          <p className="text-lg leading-relaxed text-justify mb-4">
            Furthermore, Jaulin places great importance on privacy and ethical
            technology development, and actively advocates for these values
            within the industry.
          </p>
          <p className="text-lg leading-relaxed text-justify mb-4">
            In addition to his career in the IT sector, Jaulin is also active in
            a community of young Cameroonians in Ontario, Canada. Drawing on his
            knowledge and practical experience, he is committed to volunteering
            to mentor the next generation of software engineers and providing
            them with the information and support they need to succeed in the
            dynamic field of computer science.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
