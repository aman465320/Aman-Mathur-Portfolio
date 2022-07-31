import React from "react";

const EducationCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-sm-12 d-flex flex-wrap justify-content-center align-items-center ">
        <div
          className="card bg-transparent p-4 text-center card-div"
          id="education-div"
        >
          <img
            src={props.imgLink}
            className="img-fluid img-responsive"
            id="card-img-top"
            alt="..."
            style={{ borderRadius: "50%", width: "150px" }}
          />
          <div className="card-body">
            <h5 className="card-title ">{props.name}</h5>
            <p className="card-text ">{props.passout}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationCard;
