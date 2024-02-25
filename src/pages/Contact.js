import React, { useState } from "react";
import github from "../images/github2.png";
import teams from "../images/teams.png";
import outlook from "../images/outlook.png";

export default function Contact() {
  return (
    <main>
      <br />
      <section class="textbox">
        <form action="#" method="post" class="form">
          <h1>Kontakta mig</h1>
          <div class="nameinput">
            <label for="name">Namn</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Ditt namn"
              required
            />
          </div>
          <div class="mailinput">
            <label for="mail">Mailadress</label>
            <input
              type="text"
              name="mail"
              id="mail"
              placeholder="namn@exempel.se"
              required
            />
          </div>
          <div class="textinput">
            <label for="message">Meddelande</label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Skriv ett meddelande"
              required
            ></textarea>
          </div>
          <input type="submit" value="Skicka meddelande" />
        </form>
      </section>
      <section class="contactlinks">
        <a href="https://github.com/oolsun" target="blank">
          <img src={github} alt="Github" class="btnlinks" />
        </a>
        <a
          href="https://teams.microsoft.com/l/chat/0/0?users=olov.olsson.NET23@edu.edugrade.se"
          target="blank"
        >
          <img src={teams} alt="Teams" class="btnlinks" />
        </a>
        <a href="mailto:olov.olsson.NET23@edu.edugrade.se" target="blank">
          <img src={outlook} alt="Mail" class="btnlinks" />
        </a>
        <br />
      </section>
    </main>
  );
}
