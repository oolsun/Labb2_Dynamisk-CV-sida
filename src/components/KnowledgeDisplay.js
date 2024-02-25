import React from "react";
import cvData from "./cv.json";

const KnowledgeDisplay = () => {
  return (
    <div>
      {cvData.Övrigt.map((knowledge) => (
        <div key={knowledge.id}>
          <p>{knowledge.kunskap}</p>
        </div>
      ))}
    </div>
  );
};

export default KnowledgeDisplay;
