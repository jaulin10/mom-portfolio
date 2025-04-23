// src/components/About.jsx
import React from "react";
import profilePicture from "../assets/img/photo.jpg"; // Adjust the path as necessary
import bgImage from "../assets/img/photo.jpg";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaSpotify,
  FaYoutube,
  FaBookOpen,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-8 flex flex-col md:flex-row gap-8">
        style={{ backgroundImage: `url(${bgImage})` }}
        {/* Texte */}
        <div className="flex-1 text-gray-700">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            I am a Full Stack software engineering, spécialisé en intelligence
            artificielle. I like créer des solutions innovantes et apprendre
            constamment de nouvelles technologies.
          </p>
          <p className="mb-4">
            I have une formation en ingénierie logicielle et en IA, et je
            travaille actuellement sur des projets utilisant React, Node.js,
            Spring Boot et PostgreSQL.
          </p>
          <p className="mb-4">
            Je suis motivé par l’impact positif que la technologie peut avoir
            sur nos vies.
          </p>
        </div>
        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-60 h-60 object-cover rounded-xl border-4 border-white shadow-md"
          />
          {/* Icônes sociales */}
          <div className="flex gap-4 mt-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/tonusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:tonemail@example.com"
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
    </section>
  );
};

export default About;
