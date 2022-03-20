import React, { useState, useEffect } from "react";
import FormsList from "./FormsList";
import Forms from "./Forms";
import "./Result.css";

const fetchAPI = () => {
  return fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
    response.json()
  );
};

function Result() {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [contacts, updateContacts] = useState([]);

  const addContact = (contactInfo) => {
    updateContacts([...contacts, contactInfo]);
  };
  console.log(contacts);

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
        <img src={image.message} alt="dog" className="fetched-image" />
      </div>
      <div className="d-flex flex-column align-items-center mb-5">
        <FormsList />
      </div>
    </div>
  );
}

export default Result;
