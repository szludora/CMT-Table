import React from "react";
import useDataContext from "../contexts/DataContext";
import { useState, useEffect } from "react";

export default function Field(props) {
  const { getHighlightedIndices, fields } = useDataContext();

  const isHighlighted = ['C', 'M', 'T'].some((value) =>
    getHighlightedIndices(fields, value).includes(props.index)
  );

  const getLetterColor = (letter) => {
    if (isHighlighted) {
      switch (letter) {
        case "C":
          return "letterG";
        case "M":
          return "letterB";
        case "T":
          return "letterR";
        default:
          return "letter";
      }
    }
  };

  return (
    <span className={`${getLetterColor(props.letter)}`} onClick={props.onClick}>
      {props.letter}
    </span>
  );
}
