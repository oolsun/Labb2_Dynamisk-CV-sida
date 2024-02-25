import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import rickrolling from "./audio/rickrolling.mp3";
import "./style.css";

export default function App() {
  // Easter egg 1, change background (and play audio) on click.
  const changeBackground = () => {
    const audio = new Audio(rickrolling);
    audio.loop = true;
    audio.play();
    // Couldn't change to the gif in image folder. Only got white background. Therefore its a link to a webpage and dependent on connection.
    document.body.style.backgroundImage="url(https://i.pinimg.com/originals/89/5c/e7/895ce751ba0379700381d17a67086931.gif)"; //RICKROLLED
  };

  // Easter egg 2, modal popup on input.
  const [isOpen, setIsOpen] = useState(false);
  const magicWord = "1337";
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      const letter = String.fromCharCode(event.keyCode).toLowerCase();
      setUserInput((prevWord) => prevWord + letter);

      if (userInput + letter === magicWord) {
        setIsOpen(true);
        setUserInput("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [userInput]);

  return (
    <Router>
      <div className="site-container">
        <header className="site-header">
          <Menu />
        </header>
        <main className="site-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div>
            {isOpen && (
              <div className="modal">
                <div className="modal-content">
                  <img src="https://i.gifer.com/fzbs.gif"></img>
                  <div className="close-modal" onClick={() => setIsOpen(false)}>
                    <button>Stäng</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
        <footer className="site-footer" onClick={changeBackground}>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}
