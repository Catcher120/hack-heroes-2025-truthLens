import { useState } from "react";
import "./style/AnalyseInput.css";
import Choice from "./Choice";
import Input from "./Input";
import StartAnalyseButton from "./StartAnalyseButton";

export default function AnalyseInput({setData}) {
  const [inputType, setInputType] = useState(false);
  const [input, setInput] = useState(null);
  function handleInputTypeChange() {
    setInputType((prevState) => !prevState);
    setInput(null);
  }
  return (
    <>
      <div className="analyse-input-wrapper">
        <Choice inputType={inputType} buttonHandler={handleInputTypeChange} />
        <Input inputType={inputType} setInput={setInput}/>
        <StartAnalyseButton input={input} inputType={inputType} setInput={setInput} setData={setData} />
      </div>
    </>
  );
}
