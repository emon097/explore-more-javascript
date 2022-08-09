const names = [
  "abul",
  "babul",
  "nabul",
  "chabul",
  "kabul",
  "faul",
  "gabul",
  "nabul",
  "babul",
  "gabul",
  "chabul",
];

function remote(names) {
  const uniquenames = [];
  for (let i = 0; i < names.length; i++) {
    const elementd = names[i];
    if (uniquenames.includes(elementd) === false) {
      uniquenames.push(elementd);
    }
  }
  return uniquenames;
}
const unique = remote(names);
console.log(unique);
