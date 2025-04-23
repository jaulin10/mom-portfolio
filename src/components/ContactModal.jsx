// src/components/ContactModal.jsx
import React from "react";
import bgImage from "../assets/img/photo.jpg";
import { FaTimes, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center flex justify-center items-center z-50"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl hover:text-red-500 z-10"
      >
        <FaTimes />
      </button>
      <div className="bg-white w-full h-full md:max-w-md md:h-auto rounded-2xl shadow-lg p-8 relative overflow-y-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>

        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Feel free to reach out for collaborations, job opportunities, or
            just a friendly hello!
          </p>

          <div className="flex flex-col gap-4 text-xl text-purple-600">
            <a href="mailto:n.jaulin2016@gmail.com" className="hover:underline">
              <FaEnvelope className="inline mr-2" /> n.jaulin2016@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/jaulin-nanfack/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <FaLinkedin className="inline mr-2" /> LinkedIn
            </a>
            <a
              href="https://github.com/jaulin10"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <FaGithub className="inline mr-2" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
