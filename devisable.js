// show outpu from 1-50
// if the number is deviseable by 3 than instead of the number show 'foo'
// if the number is deviseable by 5 than instead of the number show 'bar'
// if the number is deviseable by both 3 and 5 than instead of the number show 'foo'
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 5 === 0) {
    console.log("foo");
  } else if (i % 3 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}
