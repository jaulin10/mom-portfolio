// src/components/Skills.jsx
import React from "react";

const skills = [
  { name: "JavaScript", icon: "path-to-icon" },
  { name: "React", icon: "path-to-icon" },
  { name: "Node.js", icon: "path-to-icon" },
  { name: "Tailwind CSS", icon: "path-to-icon" },
];

const Skills = () => {
  return (
    <section id="experiences" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">My Skills</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-gray-200 rounded-lg shadow-lg">
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-16 w-16 mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
