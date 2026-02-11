import axios from "axios";
import React from "react";

const Apicheck = () => {
  const fetchImage = async () => {
    const medicineName = "paracetamol"; // Example medicine

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      params: { query: medicineName },
      headers: {
        Authorization: `Client-ID YOUR_ACCESS_KEY`,
      },
    });
  };

  return (
    <div>
      <button onClick={fetchImage}>Click Me</button>
    </div>
  );
};

export default Apicheck;
