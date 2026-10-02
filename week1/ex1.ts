const pi = 3.14159;
let count = 0;
count = count + 1;
console.log(count);

const scores = [90, 75, 88];
scores.push(100);
console.log(scores.length);
console.log(scores[0]);

const person = { name: "Renate", role: "EM" };
person.role = "Engineering Manager";
console.log(person);

//pi = 3;

// 1. console.log prints count, which here is 1, then it prints score.length withc is 4, then it prints the first value of scores which is 90 and lastly it prints Renate Engineering Manager. 
// Correction: it writes { name: 'Renate', role: 'Engineering Manager' }
// 2. I dont know what push does or why it works even though scores is a const. 
// 3. if you remove // in front of pi = 3; then it will print pi = 3 in the terminal I believe, but pi as a constant will still be 3.14159. 
// Correction: it gives a TypeError: Assignment to constant variable. 
// 4. MATLAB starts counting at 1, where Python and React count the first as 0. 