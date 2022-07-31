import React from "react";
import ProjectItems from "./Contents/ProjectItems";
import ProjectsCard from "./Cards/ProjectsCard";
const Projects = () => {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="text-center text-decoration-underline">My projects</h1>

          <div className="container d-grid" >
            <div className="row my-4 g-5">
              {ProjectItems.map((item) => {
                return (
                  <ProjectsCard
                    imgLink={item.imgLink}
                    title={item.name}
                    link={item.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
