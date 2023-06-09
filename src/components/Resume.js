import React from "react";
import CV from "../assets/Aman Mathur Resume (2).pdf";
const Resume = () => {
  return (
    <>
      <section>
        <div className="container resume-container">
          <h1 className="text-center text-decoration-underline mb-5">Resume</h1>
          <p>
            <button
              className="btn btn-primary resume-button mt-5"
              style={{ backgroundColor: "#d261e9" }}
            >
              <a
                href={CV}
                download="Aman Mathur"
                target="_blank"
                className="resume-link"
              >
                <i class="fa-solid fa-download"></i> Download Resume
              </a>
            </button>
          </p>
        </div>
      </section>
    </>
  );
};

export default Resume;
