// Array Destructuring

// 1. Basic Array Destructuring
const [physics, chemistry, maths] = [55, 70, 90]; // 55 - Physics, 70 - Chemistry, 90 - Maths

console.log("Physics", physics);
console.log("Chemistry", chemistry);
console.log("Maths", maths);

// 2. Handling Undefined Elements
const [physics, chemistry, maths] = [55, 70];

console.log(physics, chemistry, maths);

// 3. Skipping Elements
const [physics, , maths] = [55, 70, 90];

console.log(physics, maths);

// 4. Discarding Extra Elements
const [physics, chemistry] = [55, 70, 90];

console.log(physics, chemistry);

// 5. Default Values
const [name = "Guna", age = 0] = ["Anbu"];

console.log(name, age);

// 6. Rest Syntax
const [one, two, three, ...remainingNos] = [1, 2, 3, 4, 5, 6];

console.log(one, two, three, remainingNos);

// 7. Swapping Variables
let a = 20;
let b = 40;

[a, b] = [b, a];

console.log(a, b);

// 8. Nesting Array Destructuring
const [one, two, [three, four], five, [six, seven, eight]] = [
  1,
  2,
  [3, 4],
  5,
  [6, 7, 8],
];

console.log(one, two, three, four, five, six);

// 9. Array Destructuring on Functions
function getFullName() {
  return ["ANBU", "SELVAN"];
}

const [firstName, lastName] = getFullName();

console.log(firstName, lastName);

// 10. On Loops
const myTeam = [
  ["Vijay", "Dhanush", "vijay@gmail.com"],
  ["Rajini", "Kamal", "rajini@gmail.com"],
];

for (let [firstName, lastName, email] of myTeam) {
  console.log(`Hey ${firstName} ${lastName}, your email is: ${email}`);
}

// BONUS: Assignment to Practice

// Display the name of each object in userDetails using Array Destructuring using Functions.
const userDetails = [
  {
    id: 1,
    name: "Aakash",
    isAlive: true,
  },
  {
    id: 2,
    name: "Bala",
    isAlive: false,
  },
  {
    id: 3,
    name: "Celine",
    isAlive: true,
  },
];

//   SOLUTION

const [aakash, bala, celine] = userDetails;

console.log(aakash.name);
console.log(bala.name);
console.log(celine.name);

// 2. Use destructuring to extract info from this API responses
const response = {
  status: 200,
  data: ["apple", "banana", "orange"],
};

// SOLUTION

const [fruit1, fruit2, fruit3] = response.data;

console.log(fruit1, fruit2, fruit3);
