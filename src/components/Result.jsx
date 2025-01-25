import React from "react";
import useDataContext from "../contexts/DataContext";
import useThemeContext from "../contexts/ThemeContext";
import SuccessFeedback from "./SuccesFeedback";
import FailFeedback from "./FailFeedback";

export default function Result() {
  const { isCompleted, matches } = useDataContext();
  const { isDarkTheme } = useThemeContext();
  return (
    <div className="resultBoxWrapper">
      <div
        className={`resultBox ${
          isCompleted
            ? matches !== 0
              ? isDarkTheme
                ? "success-dark"
                : "success-light"
              : !isDarkTheme
              ? "no-success-dark"
              : "no-success-light"
            : ""
        }`}
        style={{ display: isCompleted ? "block" : "none" }}
      >
        <div className="result">
          {isCompleted ? (
            matches !== 0 ? (
              <SuccessFeedback/>
            ) : (
              <FailFeedback/>
            )
          ) : (
            <p style={{ visibility: "hidden" }}></p>
          )}
        </div>
      </div>
    </div>
  );
}
