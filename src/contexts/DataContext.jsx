import React, { createContext, useState, useContext, useEffect } from "react";
import CMTModel from "../models/CMTModel";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const CMT = new CMTModel();

  const [matches, setMatches] = useState(0);
  const [fields, setFields] = useState(CMT.getFields());
  const [getMatches, setGetMatches] = useState(CMT.getMatches(fields));
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [counter, setCounter] = useState(1);
  const [isCompleted, setIsCompleted] = useState(CMT.getIsCompleted());

  const getHighlightedIndices = (fields, value) => {
    return CMT.getHighlightedIndices(fields, value);
  };

  const setStatus = (id, counter) => {
    CMT.setStatus(id, counter);
    setFields(CMT.getFields());
  };

  const resetFields = () => {
    CMT.resetFields();
    setFields(CMT.getFields());
  };

  useEffect(() => {
    setGetMatches(CMT.getMatches(fields));
  }, [fields]);
  const reset = () => {
    setCounter(1);
    resetFields();
    const newFields = CMT.getFields();
    setFields(newFields);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <DataContext.Provider
      value={{
        CMT,
        matches,
        setMatches,
        name,
        setName,
        isSubmitted,
        setIsSubmitted,
        fields,
        setFields,
        counter,
        setCounter,
        setStatus,
        reset,
        getMatches,
        handleNameChange,
        handleSubmit,
        isCompleted,
        setIsCompleted,
        getHighlightedIndices,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default function useThemeContext() {
  return useContext(DataContext);
}
