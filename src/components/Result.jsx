import React from "react";
import useDataContext from "../contexts/DataContext";
import SuccessFeedback from "./SuccessFeedback";
import FailFeedback from "./FailFeedback";

export default function Result() {
  const { isCompleted, matches } = useDataContext();

  return (
    <div className="resultBoxWrapper">
      <div
        className={`resultBox ${
          isCompleted ? (matches !== 0 ? "success" : "no-success") : ""
        }`}
        style={{ display: isCompleted ? "block" : "none" }}
      >
        <div className="result">
          {isCompleted ? (
            matches !== 0 ? (
              <SuccessFeedback />
            ) : (
              <FailFeedback />
            )
          ) : (
            <p className="hidden"></p>
          )}
        </div>
      </div>
    </div>
  );
}
