import React from "react";

const ProjectsCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-sm-6 col-xs-12 d-flex flex-wrap justify-content-center align-items-center ">
        <div
          className="card bg-transparent p-1 text-center card-div"
          id="education-div"

        >
          <a href={props.link} target="_blank">
            <img
              src={props.imgLink}
              className="img-fluid img-responsive"
              style={{ width: "100%", height: "22vh" }}
              alt="..."
            />
          </a>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "#A67DB8" }}>
              {props.title}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
