import React, { useEffect } from "react";
import useDataContext from "../contexts/DataContext";
import SuccessFeedback from "./SuccessFeedback";
import FailFeedback from "./FailFeedback";

export default function Result() {
  const { isCompleted, matches } = useDataContext();

  useEffect(() => {
    if (isCompleted) {
      document.querySelectorAll(".feedback").forEach((element) => {
        element.classList.remove("none");
        element.classList.add("block");
      });
    } else {
      document.querySelectorAll(".feedback").forEach((element) => {
        element.classList.remove("block");
        element.classList.add("none");
      });
    }
  }, [isCompleted]);

  return (
    <div className="resultBoxWrapper">
      <div
        className={`resultBox ${
          isCompleted ? (matches !== 0 ? "success" : "no-success") : ""
        }`}
        style={{ visibility: isCompleted ? "visible" : "invisible" }}
      >
        <div className="result feedback none">
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
