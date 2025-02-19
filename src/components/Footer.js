import React from "react";
import ContactITems from "./Contents/ContactITems";
import ContactIcons from "./Icons/ContactIcons";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container p-1">
          <div className="row ">
            <div className="col-md-4 col-sm-12 footerCols my-1">
              Developed by Aman Mathur
            </div>
            <div className="col-md-4 col-sm-12 footerCols my-1">
              Copyright &#169; 2025
            </div>
            <div className="col-md-4 col-sm-12 footerCols my-1">
              <div className="row my-3 ">
                <div className="col d-flex justify-content-center align-items-center my-3 flex-wrap">
                  {ContactIcons.map((item) => {
                    return (
                      <ContactITems iconName={item.name} link={item.link} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
