import React from "react";

const ToolsCard = (props) => {
  return (
    <>
      <div className="col-md-3 col-sm-6  d-flex flex-wrap justify-content-center align-items-center ">
        <img
          src={props.link}
          alt=""
          style={{
            width: "50px",
          }}
          className="img-fluid img responsive"
        />
      </div>
    </>
  );
};

export default ToolsCard;
