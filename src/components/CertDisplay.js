import React from "react";
import cvData from "./cv.json";

const CertDisplay = () => {
  return (
    <div>
      {cvData.Kurser.map((cert) => (
        <div key={cert.id}>
          <p>{cert.kurs}</p>
        </div>
      ))}
    </div>
  );
};

export default CertDisplay;
