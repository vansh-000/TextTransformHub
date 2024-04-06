import React, { useState } from "react";

export default function Text(props) {
  const [text, setText] = useState("Enter your text");
  const [showToast, setShowToast] = useState(false);

  const toSentenceCase = (str) => {
    return str.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
      return c.toUpperCase();
    });
  };

  function countWords(text) {
    text = text.trim();
    let words = text.split(/\s+/);
    return words.length;
  }

  function countLettersWithoutSpaces(text) {
    let textWithoutSpaces = text.replace(/\s/g, "");
    let letterCount = textWithoutSpaces.length;
    return letterCount;
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const toUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const toLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const toSenCase = () => {
    let newText = toSentenceCase(text);
    setText(newText);
  };

  const handleCopy = () => {
    const textToCopy = text;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 1000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  const toClear = () => {
    setText("");
  };

  return (
    <div className="container my-4">
      <h2>{props.title}</h2>
      <div className="ab-3">
        <textarea
          className="form-control"
          value={text}
          id="floatingTextarea2"
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <div className="container my-2">
        <span className="mx-2">
          <button
            type="button"
            onClick={toUpCase}
            className="btn btn-outline-primary my-2"
          >
            Upper Case
          </button>
        </span>
        <span className="mx-2">
          <button
            type="button"
            onClick={toLowCase}
            className="btn btn-outline-primary my-2"
          >
            Lower Case
          </button>
        </span>
        <span className="mx-2">
          <button
            type="button"
            onClick={toSenCase}
            className="btn btn-outline-primary my-2"
          >
            Sentence Case
          </button>
        </span>
        <span className="mx-2">
          <button
            type="button"
            onClick={toClear}
            className="btn btn-outline-primary my-2"
          >
            Clear
          </button>
        </span>
        <span className="mx-2">
          <button
            type="button"
            onClick={handleCopy}
            className="btn btn-outline-primary my-2"
            id="liveToastBtn"
          >
            Copy
          </button>
        </span>
      </div>
      <div className="container my-4">
        <h2>Text Analytics</h2>
        Number of words: {countWords(text)}
        <br />
        Number of letters: {countLettersWithoutSpaces(text)}
      </div>
      <div
        className={`toast-container position-fixed bottom-0 end-0 p-3 ${
          showToast ? "show" : ""
        }`}
      >
        <div
          className={`toast ${showToast ? "show" : ""}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-body">Text copied to clipboard</div>
        </div>
      </div>
    </div>
  );
}
