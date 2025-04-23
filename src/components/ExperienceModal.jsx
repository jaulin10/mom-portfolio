import React, { useState } from "react";
import bgImage from "../assets/img/photo.jpg";
import { FaTimes } from "react-icons/fa";

const ExperienceModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("industry");

  const industryExperience = [
    {
      //title: "Software Developer Intern",
      //company: "SAP Canada",
      //date: "May 2024 - Aug 2024",
      //description:
      // "Worked on CI/CD pipelines and microservices. Automated test suites using Jenkins and improved code quality with SonarQube.",
    },
    {
      // title: "Field Mobility Worker",
      // company: "Shifft Transit",
      //date: "Apr 2024 - Sep 2024",
      //description:
      //  "Monitored and moved bike fleets across Toronto using the company app. Collected data to improve logistic efficiency.",
    },
    {
      // title: "Assembler",
      // company: "Louis-Ville Ladder",
      // date: "Mar 2023 - Mar 2024",
      // description:
      //   "Assembled ladders and performed quality control. Maintained workspace cleanliness and tracked daily production goals.",
    },
  ];

  const academicExperience = [
    {
      // title: "Research Assistant",
      // institution: "Centennial College",
      // duration: "Sep 2022 – Apr 2023",
      // description: "Conducted research in AI and ML under Professor X.",
    },
    {
      //  title: "Teaching Assistant",
      //  institution: "Centennial College",
      // duration: "Jan 2022 – Apr 2022",
      // description: "Assisted students in COMP125 and conducted lab sessions.",
    },
  ];

  const renderExperience = (data, type) => {
    return (
      <div className="mb-20 ">
        {type === "industry" && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-purple-800 ">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800 mb-6 ">
              <div>
                <p>
                  <strong>Programming Languages:</strong> Java, C#, JavaScript,
                  Python
                </p>
                <p>
                  <strong>Messaging Services:</strong> Apache Kafka, Java, JMS
                </p>
                <p>
                  <strong>Databases:</strong> MySQL, Oracle SQL, MS SQL Server,
                  Oracle, Postgre
                </p>
                <p>
                  <strong>DevOps Tools:</strong> Jenkins, Docker, Kubernetes,
                  Maven
                </p>
                <p>
                  <strong>Testing Tools:</strong> JUnit, Mockito, REST Assured,
                  Cucumber, Selenium, Postman
                </p>
              </div>
              <div>
                <p>
                  <strong>Backend Technologies:</strong> Spring Boot, Spring
                  Security, Spring Cloud, Spring JPA / Hibernate, GraphQL
                </p>
                <p>
                  <strong>Logging and Monitoring:</strong> Log4j, Splunk
                </p>
                <p>
                  <strong>Frontend Technologies:</strong> Angular, React, HTML5,
                  CSS3
                </p>
                <p>
                  <strong>Cloud Platforms:</strong> PCF, OCP, AWS(EC2, S3, RDS,
                  Lambda, API Gateway), Azure, Dynatrace, Kibana, NRM,
                  Artifactory, UCD
                </p>
                <p>
                  <strong>Version Control:</strong> Git, GITHUB, SVN
                </p>
                <p>
                  <strong>Methodologies:</strong> Agile (Scrum, TDD, BDD)
                </p>
                <p>
                  <strong>Documentation:</strong> Confluence, Figma, Mural,
                  Swagger
                </p>
              </div>
            </div>
          </>
        )}

        {type === "academic" && (
          <div className="mb-6 text-gray-700">
            <p className="text-lg leading-relaxed text-justify mb-4">
              My academic journey has been marked by a relentless pursuit of
              knowledge and expertise in the fields of engineering and
              technology. It all began with my Bachelor's degree in Software
              Engineering, where I laid the foundation for my understanding of
              complex software engineering fundamentals and my problem-solving
              skills. This program provided me with a solid foundation in
              software engineering and the tools needed to grasp the intricacies
              of the field.
            </p>
            <p className="text-lg leading-relaxed text-justify mb-4-6">
              Continuing my undergraduate studies, I furthered my skills by
              pursuing an advanced degree in Artificial Intelligence and
              Software Engineering Technology. This decision was motivated by a
              desire to deepen my knowledge of artificial intelligence, software
              development, and engineering practices. Through this program, I
              gained valuable insights into intelligent software design,
              development methodologies, and project management techniques,
              preparing me to tackle the real-world challenges of the software
              industry.
            </p>
          </div>
        )}

        {data.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 italic">
              {item.company || item.institution}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              {item.date || item.duration}
            </p>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    );
  };

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
      <div className="bg-white w-[90%] sm:w-[80%] md:w-[120%] lg:w-[500px] max-h-[90vh] rounded-2xl shadow-lg p-6 relative overflow-y-auto">
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 mx-2 rounded-md ${
              activeTab === "industry"
                ? "bg-purple-700 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveTab("industry")}
          >
            Industry
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-md ${
              activeTab === "academic"
                ? "bg-purple-700 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveTab("academic")}
          >
            Academic
          </button>
        </div>

        <div className="overflow-y-auto max-h-[60vh] px-2">
          {activeTab === "industry"
            ? renderExperience(industryExperience, "industry")
            : renderExperience(academicExperience, "academic")}
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
