import "../style.css";
import React, { useState, useEffect } from "react";

export default function Portfolio() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/oolsun/repos", {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Problem att hämta repositories. Försök igen.");
      }
      return response.json();
    })
    .then(data => {
      setRepositories(data);
      setLoading(false);
    })
    .catch(error => {
      console.error("Error:", error);
      setError(error.message);
      setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="titlebox">Mina repositories</h1>
      {loading ? (
        <div className="loading-screen">
          <div className="loader"></div>
        <p>Laddar repositories från github...</p>
        </div>
      ) : error ? (
        <div className="error-message">
        {error}
        </div>
      ) : (
        <div className="repo-links">
          {repositories.map(repo => (
            <button className="repo-buttons" key={repo.id}>
              <a href={repo.html_url} target="_blank">
                <h2>{repo.name}</h2>
                {repo.description}</a>
            </button>
          ))}
        </div>      
      )}
    </div>
  );
}
