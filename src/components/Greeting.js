import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const onchangehandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h>Hello World</h>
      {!changedText && <Output>let start play</Output>}
      {changedText && <Output>Play changed </Output>}
      <button onClick={onchangehandler}></button>
    </div>
  );
};

export default Greeting;
