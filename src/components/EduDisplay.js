import React from "react";
import cvData from "./cv.json";

const EduDisplay = () => {
  return (
    <div>
      {cvData.Utbildningar.map((edu) => (
        <div key={edu.id}>
          <p>
            <strong>{edu.datum}</strong> {edu.utbildning} {edu.skola} {edu.ort}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EduDisplay;
