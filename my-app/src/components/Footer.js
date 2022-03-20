import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-wrap pb-5">
        <div className="d-flex justify-content-around flex-wrap mt-5 footer-mobile-direction">
          <div>
            <div className="d-flex contact-details ps-5">
              <div className="ms-2 mt-4">
                <p>VEO TECHNOLOGIES</p>
              </div>
            </div>

            <div className="d-flex contact-details ps-5">
              <div className="ms-2 mt-4 link">
                <a href="https://event.veo.co/" target="_blank ">
                  <p> veo.co</p>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex contact-details ps-5">
              <div className="ms-2 mt-4">
                <p>Address: Rovsingsgade 68, 2100 København Ø</p>
              </div>
            </div>
            <div className="d-flex contact-details ps-5">
              <div className="ms-2 mt-4">
                <p>Phone: 78 72 44 60 </p>
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex contact-details ps-5">
              <div className="ms-2 mt-4 icon">
                <a
                  href="https://www.linkedin.com/company/veo-technologies/"
                  target="_blank "
                >
                  <p>linkedin</p>
                </a>
              </div>
            </div>
            <div className="d-flex contact-details ps-5">
              <div className="ms-2 mt-4 icon">
                <a href="https://www.facebook.com/veocamera/" target="_blank ">
                  <p>Facebook</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
