// MATLAB:  function y = square(x)
//              y = x^2;
//          end
function square(x: number): number {   // ": number" after the () = return type
  return x * x;                         // JS needs an explicit return
}

// Arrow function: same thing, shorter. Very common in React.
const square2 = (x: number): number => x * x;   // one expression → returned automatically

// Arrow function with several lines: needs { } and return
const describe = (name: string, level: number): string => {
  const loud = level > 70;
  return `${name} is ${loud ? "loud" : "ok"}`;
};

// Template string: backticks, ${ } inserts a value (like sprintf)
`Level: ${62} dB`                 // → "Level: 62 dB"

// Ternary: condition ? valueIfTrue : valueIfFalse  (a one-line if/else)
71 > 70 ? "loud" : "ok"           // → "loud"

// Built-in maths
Math.log10(100)                    // → 2
Math.round(6.0206)                 // → 6

// Predict 
const double = (n: number) => n * 2;   // This will automatically return the number after it has been multiplied by 2. 
const isLoud = (level: number) => level > 70; // This will predict if a number is loud if it is over 70. 

function label(channel: string, level: number): string {
  return `${channel}: ${isLoud(level) ? "LOUD" : "ok"}`; // This returns "LOUD" if the number presented is over 70 and "ok" if it is below. 
}

console.log(double(21)); // 42
console.log(isLoud(65)); // ok Correction: Wrong. The output is "false" 
console.log(label("mic2", 71)); // mic2 LOUD  (Forgot the : otherwise correct) 
console.log(label("mic3", double(30))); // mic3 ok (Forgot the : otherwise correct)

// Apply 
// 1. Write an arrow function ratioToDb that takes a pressure ratio and returns 20 * log10(ratio) in dB. Test it with 10 (should give 20) and 2.
const ratioTodB = (ratio: number): number => 20 * Math.log10(ratio); 
console.log(ratioTodB(10)); 
console.log(ratioTodB(2)); 

// 2. Write levelLabel(level: number): string. It should return "quiet" below 60 dB and "normal" otherwise. Use a ternary.
const isQuiet = (level: number) => level < 60;
function levelLabel(level: number): string {
  return `${isQuiet(level) ? "quiet" : "normal"}`;
}
console.log(isQuiet(56)); // true
console.log(levelLabel(56));  // quiet

// 3. Rewrite label from the Predict block as an arrow function.
const label2 = (channel: string, level: number): string => {
  const loud = level > 70;
  return `${channel}: ${loud ? "loud" : "ok"}`;
};
console.log(label2("mic4", 73)); // mic4: loud