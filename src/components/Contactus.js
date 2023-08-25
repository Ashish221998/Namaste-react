import React from "react";

const Contactus = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <div className="mb-4">
        <p className="text-gray-700">
          <strong>Email:</strong>Ashishkulkarni057@gmail.com
        </p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700">
          <strong>Phone:</strong> +91-7348897273
        </p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700">
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/ashish2207/ " target="_blank">
            https://www.linkedin.com/in/ashish2207/
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contactus;
