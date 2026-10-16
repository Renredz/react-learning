import { useState } from "react";
import Weather from "./Weather";

const ratioTodB = (ratio: number): number => 20 * Math.log10(ratio); // Defined outside the app to avoid unnecessary rendering

export default function App() {
  const [text, setText] = useState("");
  const ratio = Number(text);
  const dB = ratioTodB(ratio);    // calls the function defined outside the app so it wont be recreated every render
  

 { return (
    <>
    <h1>dB calculator</h1>
    <input
      value={text}    // showing the state
      onChange={e => setText(e.target.value)}   // updating state when new number is typed in
      placeholder="Pressure ratio"
      />
      <p>Ratio {ratio} = {dB.toFixed(2)} dB</p>
      <Weather />
    </> 
  );}
}

// prediction 2 from the counter. Change it to setCount(prev => prev + 1), click once, and note the result and why. Starts at 1 and then adds 1 for each click. 
// If all 3 instances have prev+1 then it adds 1 3 times so it increases by 3 for each click.
// If it is added only in the first instance then the other two overwrites it and it only adds 1 per click still. 
// what does the page show when the box is empty? Ratio: 0 = -infinity dB
// And when you type abc? error. No Ratio: NaN = NaN dB

// Block 2
// 1. What logs, in what order, when the page loads? First the dB, as before, then the Effect demo. 
// 2. You type 2. What logs now? Does effect A run? No, type B. 
// 3. What does the browser tab’s title say after you type 2? render effect B

// Would it be better to do it in a useEffect with a separate dB state, like useEffect(() => setDb(ratioTodB(ratio)), [ratio])?
// No, dB is a calculation and does not fetch information from any external source other than the users input so that should remain a component not an effect. 