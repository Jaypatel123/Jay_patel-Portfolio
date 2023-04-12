import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/22102643"}
          alt="Founder"
        />

        <h2>Jay D Patel</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/jayp96/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/jaypatel9716/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Jaypatel123" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
