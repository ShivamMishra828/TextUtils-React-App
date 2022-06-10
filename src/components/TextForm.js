import react, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");

  const handleUpperCaseClick = () => {
    console.log("UpperCase was Clicked");
    let newUpperText = Text.toUpperCase();
    setText(newUpperText);
  };

  const handleCopy = () => {
    var Text = document.getElementById("exampleFormControlTextarea1");
    Text.select();
    navigator.clipboard.writeText(Text.value);
  };

  const handleLowerCaseClick = () => {
    console.log("LowerCase was Clicked");
    let newLowerText = Text.toLowerCase();
    setText(newLowerText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleFirstCapital = () => {
    const arr = Text.split(" ");
    for(var i = 0; i<arr.length; i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str = arr.join(" ");
    setText(str);
  };

  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleClearClick = () => {
    setText("");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <br />
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlTextarea1" className="form-label my-0">
            Text Area
          </label>
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            style={{
              backgroudColor: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick}>
          Convert in UpperCase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleFirstCapital}>
          Capitalized First Letter
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowerCaseClick}
        >
          Convert in LowerCase
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          <b>
            {Text.split(" ").length} Words and {Text.length} Character in Your
            Text.
          </b>
        </p>
        <p>
          {" "}
          <b>
            {" "}
            {0.008 * Text.split(" ").length} Minutes is Required to Read the
            Text.
          </b>
        </p>
        <h2>Preview</h2>
        <p>
          {Text.length > 0
            ? Text
            : "Enter Anything In Text Area to Preview it."}
        </p>
      </div>
    </>
  );
}
