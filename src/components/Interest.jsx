// src/components/Portfolio.jsx
import React from "react";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    link: "https://link-to-project1",
    image: "https://via.placeholder.com/300", // Ajout d'une image
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    link: "https://link-to-project2",
    image: "https://via.placeholder.com/300", // Ajout d'une image
  },
  // Ajouter d'autres projets ici
];

const Portfolio = () => {
  return (
    <section id="interests" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">My Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="mt-6 inline-block text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
