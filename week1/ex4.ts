export {};   // makes this file its own module, so its names don't clash with other files
const levels = [62, 71, 58, 65];

// map: run a function on every item → NEW array, same length
// MATLAB: arrayfun(@(l) l + 10, levels)
levels.map(l => l + 10)              // [72, 81, 68, 75]

// filter: keep items where the function returns true → NEW array
// MATLAB: levels(levels > 60)
levels.filter(l => l > 60)           // [62, 71, 65]

// Both work on arrays of objects
const ms = [
  { channel: "mic1", level: 62 },
  { channel: "mic2", level: 71 },
];
ms.map(m => m.channel)               // ["mic1", "mic2"]
ms.filter(m => m.level > 70)         // [{ channel: "mic2", level: 71 }]

// Chaining: the output of one feeds into the next
ms.filter(m => m.level > 70).map(m => m.channel)   // ["mic2"]

// Neither one changes the original array (unlike push)

// {measurements.map(m => <li>{m.channel}: {m.level} dB</li>)}

// Predict
const readings = [0.2, 0.9, 0.4, 1.3];
const doubled = readings.map(r => r * 2);
const high = readings.filter(r => r > 0.5);

console.log(doubled); // [0.4, 1.8, 0.8, 2.6]
console.log(high); // [0.9, 1.3]
console.log(readings); // [0.2, 0.9, 0.4, 1.3]
console.log(readings.filter(r => r > 0.5).map(r => r * 10)); // [9, 13]

// Apply
type Measurement = { channel: string; level: number;}; // added at task 4. 
const measurements: Measurement[] = [
  { channel: "mic1", level: 62 },
  { channel: "mic2", level: 71 },
  { channel: "mic3", level: 58 },
];
// 1. Make an array of just the channel names.
const channels = measurements.map(m => m.channel); 
console.log(channels);
// 2. Make an array of the measurements above 60 dB.
const high60 = measurements.filter(m => m.level > 60);
console.log(high60);
// 3. Make an array of the names of the channels above 60 dB. Use chaining.
const ch60 = measurements.filter(m => m.level > 60).map(m => m.channel);
console.log(ch60); 
// 4. Make an array of strings like "mic1: 62 dB". Use a template string. 
const string = measurements.map(m => `${m.channel}: ${m.level} dB`); 
console.log(string); 

