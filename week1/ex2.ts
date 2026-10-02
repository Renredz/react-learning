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
// 1. each console.log prints: [1, 2, 3] then [1, 2, 3] [5, 1, 2, 3] then id: S1, readings: [0.2, 0.4, 0.9] 
// 2. a did dont change when pushing to b because the push was to b only, making b different from a and not causing anything to change in a. 
// 3. I guess the ... makes the changes happen at the start instead of at the end of what it is making a change to.
// 4. One was changed from S1 to S2 and the other was pushed to have one more value at the end.   