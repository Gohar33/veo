import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="col-md-12 d-flex flex-row flex-wrap pb-5 pt-5 wrapper">
        <div className="col-sm-5 d-flex justify-content-center image-position">
          <img
            src="https://i.imgur.com/3jyHNIf.jpg"
            alt="veo-camera"
            className="image-fluid rounded-circle w-50 h-100 ms-5 "
          />
        </div>
        <div className="col-sm-7 d-flex flex-column justify-content-center mb-5 text-wrapper">
          <h1 className=" d-flex justify-content-center mt-5">
            Veo Technologies
          </h1>
          <p className="d-flex justify-content-center  mt-3">
            Live-streaming, instant access and stunning video quality.
          </p>
        </div>
      </div>
    </div>
  );
}
