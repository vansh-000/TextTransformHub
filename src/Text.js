import React, { useState } from "react";

export default function Text(props) {
  const toSentenceCase = (str) => {
    return str.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
      return c.toUpperCase();
    });
  };
  const [text, setText] = useState("Enter you text");
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
        console.log("Text copied to clipboard");
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
      <h1>{props.title}</h1>
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
            class="btn btn-outline-primary"
          >
            Upper Case
          </button>
        </span>
        <span className="mx-2">
          <button
            type="button"
            onClick={toLowCase}
            class="btn btn-outline-primary"
          >
            Lower Case
          </button>
        </span>
        <span className="mx-2">
          <button
            type="button"
            onClick={toSenCase}
            class="btn btn-outline-primary"
          >
            Sentence Case
          </button>
        </span>
        <span className="mx-2">
          <button
            type="button"
            onClick={toClear}
            class="btn btn-outline-primary"
          >
            Delete
          </button>
        </span>
        <span className="mx-2">
          <button
            type="button"
            onClick={handleCopy}
            class="btn btn-outline-primary"
          >
            Copy
          </button>
        </span>
      </div>
    </div>
  );
}
