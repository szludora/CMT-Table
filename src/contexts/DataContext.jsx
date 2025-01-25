import React, { createContext, useState, useContext } from "react";
import CMTModel from "../models/CMTModel";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const CMT = new CMTModel();

  const [isCompleted, setIsCompleted] = useState(false);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [counter, setCounter] = useState(1);
  const [matches, setMatches] = useState(0);
  const setStatus = (id, counter) => CMT.setStatus(id, counter);
  const [fields, setFields] = useState(CMT.getFields());

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const getHighlightedIndices = (fields, value) => {
    return CMT.getHighlightedIndices(fields, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  const reset = () => {
    setCounter(1);
    CMT.resetFields();
    const newFields = CMT.getFields();
    setFields(newFields);
  };
  return (
    <DataContext.Provider
      value={{
        CMT,
        getHighlightedIndices,
        reset,
        fields,
        setFields,
        setStatus,
        matches,
        setMatches,
        name,
        counter,
        setCounter,
        isCompleted,
        setIsCompleted,
        handleNameChange,
        handleSubmit,
        submitted,
        setSubmitted,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default function useDataContext() {
  return useContext(DataContext);
}
