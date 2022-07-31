import React from "react";
import homeImg from "../assets/Images/home-main-svg.svg";
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
                  An aspiring <span> Full stack developer</span>
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

        <div className="container intro-container my-3">
          <div className="container my-5">
            <h2 className="intro-heading  mb-5 text-center">INTRODUCTION</h2>
            <div className="row">
              <div className="col-md-7 col-sm-12 intro-description">
                <p className="my-5">
                  Hey everyone !! I am Aman Mathur , currently pursuing my Btech
                  . I live in Jaipur , Rajasthan also known as Pink city.
                </p>
                <p>
                  I have a deep interest in coding and building web Applications{" "}
                </p>
                <p className="my-5">
                  I'm an aspiring web developer by day and science enthusiast by
                  night. I love digging through scientific disccoveries , and I
                  love to code in C++ and Javascript.
                </p>
              </div>
              <div className="col-md-5 col-sm-12 d-flex justify-content-center align-items-center avatar-img">
                <img
                  src="https://media-exp1.licdn.com/dms/image/D4D03AQFDcHKzK57BMA/profile-displayphoto-shrink_400_400/0/1639419352264?e=1665014400&v=beta&t=f5FsbqLtpljYDBa7l5P25XmIz8aSgig9EvBZ77kRI0g"
                  alt=""
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
