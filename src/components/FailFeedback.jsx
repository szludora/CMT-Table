import React from "react";

export default function FailFeedback(props) {
  return (
    <div>
      <audio autoPlay>
        <source src={props.fail} type="audio/wav" />
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
