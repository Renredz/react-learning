const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a);

const c = [...a];
c.push(5);
console.log(a);
console.log(c);

const sensor = { id: "S1", readings: [0.2, 0.4] };
const copy = { ...sensor };
copy.id = "S2";
copy.readings.push(0.9);
console.log(sensor);

// Questions
// 1. each console.log prints: [1, 2, 3, 4] then [1, 2, 3, 4] [1, 2, 3, 4, 5] then id: S1, readings: [0.2, 0.4, 0.9] 
// 2. const b = a copies the arrow meaning it now also points to what a points to, not the array itself. a and b point to the same array/thing, so b.push(4) changes what both of them point to so both change.
// 3. ... is the spread operator meaning it puts the intem into where you add the operator. It unpacks the items into a new array or object. Now c points to its own, new array, so c.push(5) doesn't touch a. It's the same as a.copy() in Python. 
// 4. { ...sensor } makes a new object with the same values, but only one level deep. This is called a shallow copy. id does not push any changes to the sensor variable. readings.push adds a new variable to the array. 

// React checks whether data is a new object to decide whether to redraw. That's why you'll see setItems([...items, newItem]) in PRs instead of items.push(newItem)

// Extra
const x = { tags: ["a"] };
const y = { ...x, tags: [...x.tags] };
y.tags.push("b");
console.log(x.tags);

// Prediction: 
// a, b 
// Output: [ 'a' ] 
// because only y contains b, x still only contains a. 

// Part B
type Measurement = { channel: string; level: number;}; // added at task 4. 
const measurements: Measurement[] = [
  { channel: "mic1", level: 62 },
  { channel: "mic2", level: 71 },
  { channel: "mic3", level: 58 },
];
// 1. Log the level of mic2
console.log(measurements[1].level) // outputs only the mic level
console.log(measurements.find(m => m.channel === "mic2")) // outputs channel and mic level
// 2. Add mic4 with level 65
measurements.push({channel: "mic4", level: 65})
console.log(measurements)
// 3. Log how many measurements there are
console.log(measurements.length)
// 4. Define a type for one measurement and use it on the array


