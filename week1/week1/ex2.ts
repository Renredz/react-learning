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
// 2. const b = a copies the arrow, not the array. a and b point to the same array, so b.push(4) changes the one array both of them see.
// 3. ... is the spread operator. It unpacks the items into a new array or object. Now c points to its own array, so c.push(5) doesn't touch a. It's the equivalent of a.copy() in Python. 
// 4. { ...sensor } makes a new object and copies each field over, but only one level deep. This is called a shallow copy. 

// React checks whether data is a new object to decide whether to redraw. That's why you'll see setItems([...items, newItem]) in PRs instead of items.push(newItem)

const x = { tags: ["a"] };
const y = { ...x, tags: [...x.tags] };
y.tags.push("b");
console.log(x.tags);

// Prediction: 
// a, b 
// Output: I did not see any output or error message when I added this code and ran the file again in the terminal. Why?