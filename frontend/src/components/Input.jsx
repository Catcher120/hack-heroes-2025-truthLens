import { useState } from "react";
import "./style/Input.css";

export default function Input({ inputType, setInput }) {
  function handleFileChange(e) {
    setInput(e.target.files[0]);
  }

  function handleTextChange(e) {
    setInput(e.target.value);
  }

  
  return (
    <>
      <div className="input-wrapper">
        {!inputType && (
          <textarea
            onChange={handleTextChange}
            name="input-text"
            placeholder="Tutaj wklej tekst"
          ></textarea>
        )}
        {inputType && <input onChange={handleFileChange} type="file" name="input-img" accept="image/*" />}
      </div>
    </>
  );
}
