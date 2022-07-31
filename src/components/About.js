import React from "react";
import aboutImg from "../assets/Images/about-main.png";

import SkillsetCard from "./Cards/SkillsetCard";
import ToolsCard from "./Cards/ToolsCard";
import EducationCard from "./Cards/EducationCard";

import Tools from "./Contents/Tools";
import Skills from "./Contents/Skills";
import Education from "./Contents/Education";

const About = () => {
  return (
    <>
      <section>
        <div className="container my-5">
          <h1 className=" my-3 about-heading text-center">About Me</h1>
          <div className="row about-main my-4">
            <div className="col-md-6 col-sm-12 my-5 text-container">
              <p style={{ fontSize: "1.2rem" }}>
                Hello Everyone! I Am <span>Aman Mathur</span> from{" "}
                <span>Jaipur , Rajasthan</span>
                <br />I am an undergraduate pursuing Btech in Electronics and
                Communications Engineering from IIIT Kota <br />
                <br />
                <br />
                My hobbies are
                <ul>
                  <li>Travelling</li>
                  <li>Listening to Music</li>
                  <li>Watching movies and web series</li>
                </ul>
              </p>
            </div>
            <div className="col-md-6 col-sm-12 my-5 img-container">
              <img
                src={aboutImg}
                alt=""
                className="img-responsive img-fluid"
                style={{ maxHeight: "300px", borderRadius: "0" }}
              />
            </div>
          </div>
        </div>

        <div className="container education-container my-5">
          <h1 className="my-3 text-center about-heading">Education </h1>
          <div className="container d-grid">
            <div className="row my-4 g-5">
              {Education.map((item) => {
                return (
                  <EducationCard
                    name={item.name}
                    passout={item.passout}
                    imgLink={item.imgLink}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="container skill-container my-5">
          <h1 className="my-3 text-center about-heading">Skills </h1>
          <div className="container d-grid">
            <div className="row my-4 g-5">
              {Skills.map((item) => {
                return <SkillsetCard link={item.link} />;
              })}
            </div>
          </div>
        </div>

        <div className="container tools-container my-5">
          <h1 className="my-3 text-center about-heading">Tools I use</h1>
          <div className="container d-grid">
            <div className="row my-4 g-5">
              {Tools.map((item) => {
                return <ToolsCard link={item.link} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
