import { useState } from "react";
import "./style/AnalyseInput.css";
import Choice from "./Choice";
import Input from "./Input";
import StartAnalyseButton from "./StartAnalyseButton";

export default function AnalyseInput({ setData, isLoading, setIsLoading }) {
  const [inputType, setInputType] = useState(false);
  const [input, setInput] = useState(null);
  function handleInputTypeChange() {
    setInputType((prevState) => !prevState);
    setInput(null);
  }
  function switchLoading() {
    setIsLoading((prevState) => !prevState);
  }
  return (
    <>
      <div className="analyse-input-wrapper">
        <Choice inputType={inputType} buttonHandler={handleInputTypeChange} />
        <Input inputType={inputType} setInput={setInput} />
        <StartAnalyseButton
          isLoading = {isLoading}
          switchLoading = {switchLoading}
          input={input}
          inputType={inputType}
          setInput={setInput}
          setData={setData}
        />
      </div>
    </>
  );
}
