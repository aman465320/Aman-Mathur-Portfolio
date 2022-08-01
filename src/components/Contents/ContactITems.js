import React from "react";

const ContactITems = (props) => {
  return (
    <>
      <a
        href={props.link}
        style={{ color: "white", textDecoration: "none", fontSize: "2rem" }}
        className="mx-2"
        target="_blank"
      >
        {" "}
        <i class={props.iconName}></i>{" "}
      </a>
    </>
  );
};

export default ContactITems;
