import React from "react";

import SuccessFeedback from "./SuccesFeedback";
import FailFeedback from "./FailFeedback";

export default function Result(props) {
  return (
    <div className="resultBoxWrapper">
      <div
        className={`resultBox ${
          props.isCompleted
            ? props.matches !== 0
              ? props.isDarkTheme
                ? "success-dark"
                : "success-light"
              : !props.isDarkTheme
              ? "no-success-dark"
              : "no-success-light"
            : ""
        }`}
        style={{ display: props.isCompleted ? "block" : "none" }}
      >
        <div className="result">
          {props.isCompleted ? (
            props.matches !== 0 ? (
              <SuccessFeedback
                name={props.name}
                matches={props.matches}
                yey={props.yey}
              ></SuccessFeedback>
            ) : (
              <FailFeedback fail={props.fail}></FailFeedback>
            )
          ) : (
            <p style={{ visibility: "hidden" }}></p>
          )}
        </div>
      </div>
    </div>
  );
}
