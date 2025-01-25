import React from "react";
import useDataContext from "../contexts/DataContext";
import yey from "../sounds/yey.mp3";

export default function SuccessFeedback() {

  const { name, matches } = useDataContext();

  return (
    <div className="confetti-container">
      <audio autoPlay>
        <source src={yey} type="audio/mpeg" />
      </audio>
      &nbsp;&nbsp;&nbsp;Congratulations, {name}! You have {matches} lines!
      <picture>
        <source
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f38a/512.webp"
          type="image/webp"
        />
        <img
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f38a/512.gif"
          alt="🎊"
          width="50"
          height="50"
          className="confetti"
        />
      </picture>
    </div>
  );
}
