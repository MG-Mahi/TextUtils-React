import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    console.log("Uppercase is clicked", text);

    let newText = text.toUpperCase();

    setText(newText);

    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleCapclick = () => {
    let newText = "";
    text.split(" ").forEach(
      (letter) => {
        newText += `${letter[0].toUpperCase() + letter.slice(1)} `;
        setText(newText);
      }
      // console.log(letter[0].toUpperCase() + letter.slice(1))
    );
    props.showAlert("Capitalised first letter", "success");
  };

  const handleReverseclick = () => {
    let newText = "";
    text.split(" ").forEach((e) => {
      let textArr = new Array(...e);
      //   console.log(textArr);
      let reversedText = textArr.reverse();
      //   console.log(reversedText);
      let joinText = reversedText.join("");
      //   console.log(joinText);

      newText += `${joinText} `;
    });
    setText(newText);
    props.showAlert("Reversed the below text", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleClearclick = () => {
    setText("");
    props.showAlert("Cleared the text", "warning");
  };

  const handleCopyclick = () => {
    const inputText = document.getElementById("textarea");
    inputText.select();
    navigator.clipboard.writeText(inputText.value);
    props.showAlert("Copied the text", "success");
  };

  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed the extra spaces", "success");
  };

  const [text, setText] = useState("Enter text here");

  // console.log(props.mode);

  return (
    <>
      <div
        className="mb-3"
        style={{ color: `${props.mode === "light" ? "black" : "white"}` }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="textarea"
            rows="6"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#464b4f",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpclick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverseclick}>
          Reverse text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCapclick}>
          Capitalize
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyclick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearclick}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: `${props.mode === "light" ? "black" : "white"}` }}
      >
        <h3>Summary</h3>
        <p>
          There are {text.length > 0 ? text.trim().split(" ").length : 0} words
          and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read.</p>

        <h3>Preview</h3>
        <div>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview it here"}
        </div>
      </div>
    </>
  );
}
