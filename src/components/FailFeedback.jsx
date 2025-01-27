import React, { useEffect, useRef, useState } from "react";
import fail from "../assets/sounds/fail.wav";

export default function FailFeedback() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <div className="failed-result">
      <audio ref={audioRef} preload="auto">
        <source src={fail} type="audio/wav" />
      </audio>
      <picture>
        <source
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f622/512.webp"
          type="image/webp"
        />
        <img
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f622/512.gif"
          alt="😢"
          width="35"
          height="35"
          className="confetti"
        />
      </picture>
      <p>&nbsp;&nbsp;&nbsp;You have no lines, try again!</p>
    </div>
  );
}
