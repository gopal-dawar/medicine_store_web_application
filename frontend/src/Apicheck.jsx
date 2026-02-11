import axios from "axios";
import React from "react";

const Apicheck = () => {

  const fetchImage = async () => {
    try {
      const medicineName = "paracetamol"; // Example medicine

      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: { query: medicineName },
          headers: {
            Authorization: `Client-ID YOUR_ACCESS_KEY`
          }
        }
      );

      console.log(response.data.results[0].urls.small);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchImage}>Click Me</button>
    </div>
  );
};

export default Apicheck;
