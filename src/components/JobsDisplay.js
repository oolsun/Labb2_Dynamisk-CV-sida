import React from "react";
import cvData from "./cv.json";

const JobsDisplay = () => {
  return (
    <div>
      {cvData.Arbetslivserfarenhet.map((job) => (
        <div key={job.id}>
          <p>
            <strong>{job.datum}</strong> {job.yrke} {job.arbetsgivare} {job.ort}
          </p>
        </div>
      ))}
    </div>
  );
};

export default JobsDisplay;
