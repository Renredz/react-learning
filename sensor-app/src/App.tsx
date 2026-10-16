import { useState } from "react";

const ratioTodB = (ratio: number): number => 20 * Math.log10(ratio); // Defined outside the app to avoid unnecessary rendering

export default function App() {
  const [text, setText] = useState("");
  const ratio = Number(text);
  const dB = ratioTodB(ratio);    // calls the function defined outside the app so it wont be recreated every render
  

  return (
    <>
    <h1>dB calculator</h1>
    <input
      value={text}    // showing the state
      onChange={e => setText(e.target.value)}   // updating state when new number is typed in
      placeholder="Pressure ratio"
      />
      <p>Ratio {ratio} = {dB.toFixed(2)} dB</p>
    </>
  );
  //<button>Ratio {ratio} = {ratioTodB} dB</button>;

  //const [count, setCount] = useState(0);

 // function handleClick() {
   // setCount(count + 1);
   // setCount(count + 1);
   // setCount(count + 1);
 // }

  //return <button onClick={handleClick}>Count: {count}</button>; // After one button click this button should show: Count: 1
}