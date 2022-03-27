import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer-wrap pb-5">
        <div className="d-flex justify-content-around flex-wrap mt-5 footer-mobile-direction">
          <div>
            <div className="d-flex ps-4 pb-2">
              <div className="ms-2 mt-4">
                <p>VEO TECHNOLOGIES</p>
              </div>
            </div>

            <div className="d-flex contact-details ps-4">
              <div className="ms-2 mt-4 link">
                <a
                  href="https://event.veo.co/"
                  target="_blank "
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <p> veo.co</p>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex contact-details ps-4">
              <div className="ms-2 mt-4">
                <p>Address: Rovsingsgade 68, 2100 København Ø</p>
              </div>
            </div>
            <div className="d-flex contact-details ps-4">
              <div className="ms-2 mt-4">
                <p>Phone: 78 72 44 60 </p>
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex contact-details ps-4">
              <div className="ms-2 mt-4 link">
                <a
                  href="https://www.linkedin.com/company/veo-technologies/"
                  target="_blank "
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <p>Linkedin</p>
                </a>
              </div>
            </div>
            <div className="d-flex contact-details ps-4">
              <div className="ms-2 mt-4 link">
                <a
                  href="https://www.facebook.com/veocamera/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  text-decoration-none"
                >
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
