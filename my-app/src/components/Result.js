import React, { useState, useEffect } from "react";
import "./Result.css";

const fetchAPI = () => {
  return fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
    response.json()
  );
};

function Result() {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchAPI()
      .then((data) => {
        setIsLoading(false);
        setImage(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <div>
        <img src={image.message} alt="dog-image" className="fetched-image" />
      </div>
      <div className="d-flex flex-column align-items-center">
        <p>First Name</p>
        <p>Last Name</p>
        <p>Email</p>
        <p>Age</p>
      </div>
    </div>
  );
}

export default Result;
