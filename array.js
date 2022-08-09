const country = "bangladesh";
const age = 50;
const independence = true;
const student = { id: 244, class: 11, name: "agun" };
const friend = [13, 14, 20, 25, 17, 28];
function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof independence);
console.log(typeof student);

// checking array 'array.isArray'
console.log(Array.isArray(friend));
console.log(typeof add);

// check this is exist or not with 'includs'
console.log(friend.includes(80));
if (friend.indexOf(450) !== -1) {
}

// concat
const newfriend = [23, 33, 22, 30, 11];
allfriend = newfriend.concat(friend);
console.log(allfriend);
