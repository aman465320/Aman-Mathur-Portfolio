import React from "react";
import homeImg from "../assets/Images/home-main-svg.svg";
import myImg from "../assets/Images/aman.jfif";
import ContactIcons from "../components/Icons/ContactIcons";
import ContactITems from "./Contents/ContactITems";
const Home = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row home-main my-5">
            <div className="col-md-6 col-sm-12 my-5 text-container">
              <h1>
                Hi There ! <span className="waving">👋🏻 </span>
                <br />I Am <span>Aman Mathur </span> <br />
                <div className="mt-5" style={{ fontSize: "55%" }}>
                  An aspiring <span> Software Engineer</span>
                </div>
              </h1>
            </div>
            <div className="col-md-6 col-sm-12 my-5 img-container">
              <img
                src={homeImg}
                alt=""
                className="img-responsive img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
        </div>

        <div className="container intro-container my-1">
          <div className="container my-5">
            <h2 className="intro-heading mb-5 text-center">INTRODUCTION</h2>
            <div className="row">
              <div className="col-md-7 col-sm-12 intro-description">
                <p className="my-5">
                  Hey everyone! I am Aman Mathur, a Software Development
                  Engineer at Flipkart and a B.Tech graduate from IIIT Kota.
                  Originally from Jaipur, Rajasthan—famously known as the Pink
                  City—I have a passion for solving complex problems and
                  building scalable systems.
                </p>
                <p>
                  With expertise in backend development, I have worked on
                  high-performance distributed systems, API auditing,
                  Kubernetes, and authentication modules. I enjoy optimizing
                  large-scale services, ensuring low-latency responses, and
                  enhancing system observability.
                </p>
                <p className="my-5">
                  Beyond work, I am an active competitive programmer with 1000+
                  solved problems on LeetCode and CodeChef. I love tackling
                  algorithmic challenges, experimenting with new technologies,
                  and contributing to open-source projects.
                </p>
              </div>
              <div className="col-md-5 col-sm-12 d-flex justify-content-center align-items-center avatar-img">
                <img
                  src={myImg}
                  alt="Aman Mathur"
                  className="img-fluid img-responsive"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container intro-container my-5">
          <h2 className="intro-heading text-center ">FIND ME ON</h2>

          <div className="container">
            <div className="row my-3 ">
              <div className="col d-flex justify-content-center align-items-center my-3 flex-wrap">
                {ContactIcons.map((item) => {
                  return <ContactITems iconName={item.name} link={item.link} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
