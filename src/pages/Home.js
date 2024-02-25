import olov from "../images/olov.jpg";
import "../style.css";
import React, { useState } from "react";

export default function Home() {
  return (
    <main>
      <h1 className="titlebox">Olov Olsson Sundqvist</h1>
      <div className="imagebox">
        <img src={olov} alt="Olov" class="selfportrait" />
      </div>
    </main>
  );
}
