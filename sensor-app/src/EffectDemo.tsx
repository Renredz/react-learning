import { useEffect, useState } from "react";

export default function EffectDemo() {
  const [text, setText] = useState("");
  console.log("render, text =", text);

  useEffect(() => {
    console.log("effect A");
  }, []);

  useEffect(() => {
    console.log("effect B, text =", text);
    document.title = `Typed: ${text}`;
  }, [text]);

  return <input value={text} onChange={e => setText(e.target.value)} placeholder="effect demo" />;
}