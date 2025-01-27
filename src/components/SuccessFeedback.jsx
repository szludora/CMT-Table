import React, { useEffect, useRef } from "react";
import useDataContext from "../contexts/DataContext";
import yey from "../assets/sounds/yey.mp3";

export default function SuccessFeedback() {
  const { name, matches } = useDataContext();

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <div className="confetti-container">
      <audio ref={audioRef} preload="auto">
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
