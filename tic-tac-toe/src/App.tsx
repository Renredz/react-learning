import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1); // This increases the number with 1 for every click of the button, first time going from 0 to 1. 
    setCount(count + 1);
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Count: {count}</button>; // After one button click this will return 1 so the button will display 1 click.  
}