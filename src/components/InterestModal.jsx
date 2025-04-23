// src/components/InterestModal.jsx
import React from "react";
import bgImage from "../assets/img/photo.jpg";
import { FaTimes } from "react-icons/fa";

const interests = [
  "Artificial Intelligence",
  "Software Engineering",
  "UI/UX Design",
  "Music Composition",
  "Community Building",
  "Reading Tech Articles",
  "Open-source Contribution",
];

const InterestModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center flex flex justify-center items-center z-50"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl hover:text-red-500 z-10"
      >
        <FaTimes />
      </button>
      <div className="bg-white w-full h-full md:max-w-3xl md:h-auto rounded-2xl shadow-lg p-8 relative overflow-y-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Interests</h2>
        <p className="text-lg leading-relaxed text-justify mb-4">
          My professional interests focus primarily on software engineering and
          intelligent systems integration. With a solid engineering background,
          I am deeply fascinated by the design, development, and maintenance of
          software systems that meet the highest quality and reliability
          standards. Solving complex problems and implementing innovative
          solutions that improve the functionality and security of software
          applications excites me.
        </p>
        <p className="text-lg leading-relaxed text-justify mb-4">
          Besides software engineering, artificial intelligence is at the heart
          of my professional activities. I am deeply committed to developing
          intelligent solutions capable of simulating, learning, and adapting to
          complex human behaviors. The evolving nature of artificial
          intelligence excites me, as it requires a constant rethinking of
          existing models and the continuous exploration of new approaches. I am
          particularly interested in applying advanced techniques such as
          machine learning, natural language processing, and deep neural
          networks to solve real-world problems, optimize decision-making
          processes, and create autonomous systems capable of generating value
          in an increasingly data-driven world.
        </p>
        <p className="text-lg leading-relaxed text-justify mb-4">
          At the intersection of software engineering and artificial
          intelligence, my core principle is to design innovative solutions that
          respect user privacy and promote the ethical use of AI. I believe that
          the processing of personal data and algorithmic transparency are
          essential pillars of responsible development in artificial
          intelligence. By integrating user-centric practices throughout the
          development cycle—from model design to deployment—I strive to create
          intelligent systems that are efficient, reliable, and respectful of
          individual rights. This commitment reflects my desire to promote
          ethical, inclusive, and trustworthy AI, capable of meeting not only
          technical objectives but also growing societal expectations for
          algorithmic justice and digital accountability.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {interests.map((item, idx) => (
            <li key={idx} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InterestModal;
