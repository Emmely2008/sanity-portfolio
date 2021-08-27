import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 dark:bg-green-900 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive dark:text-gray-200">
          My Projects
        </h1>
        <h2 className="text-lg text-gray-600 dark:text-gray-200 flex justify-center mb-12">
          Welcome to my project page!
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project) => {
              return (
                <article className="relative rounded-lg shadow-xl p-16 bg-white dark:bg-gray-900">
                  <h3 className="text-3xl font-bold mb-2 text-gray-800 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreffer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-gray-500 dark:text-gray-100 text-xs space-x-4">
                    <span>
                      <strong className="font-bold">Finished on</strong>
                      {""}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className="font-bold">Company</strong>:{" "}
                      {project.place}
                    </span>
                    <span>
                      <strong className="font-bold">Type</strong>{" "}
                      {project.projectType}
                    </span>
                    <p className="my-6 text-lg text-gray-700 dark:text-gray-100 leading-relaxed">
                      {project.description}
                      <a
                        href={project.link}
                        alt={project.title}
                        target="_blank"
                        rel="noopener noreffer"
                        className="text-red-500 dark:text-red-100 font-bold hover:underline hover:text-red-400 dark:hover:text-red-200"
                      >
                        View The Project{" "}
                        <span role="img" aria-label="right pointer">
                          👉
                        </span>
                      </a>
                    </p>
                  </div>
                </article>
              );
            })}
        </section>
      </section>
    </main>
  );
}
export default Project;
