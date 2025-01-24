import React from "react";

export default function SuccessFeedback(props) {
  return (
    <div className="confetti-container">
      <audio autoPlay>
        <source src={props.yey} type="audio/mpeg" />
      </audio>
      &nbsp;&nbsp;&nbsp;Congratulations, {props.name}! You have {props.matches}{" "}
      lines!
      <picture>
        <source
          srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f38a/512.webp"
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
