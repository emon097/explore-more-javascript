/*
fixed: per item wood requarment 
1 chair --> 3cft
2 table --> 10cft
3 bed --> 50cft
vary: quantity
*/
function woodcalculator(chairqantity, tablequantity, bedquantity) {
  const perchairwood = 3;
  const pertablerwood = 10;
  const perbedwood = 50;

  const chairwood = chairqantity * perchairwood;
  const tablewood = tablequantity * pertablerwood;
  const bedwood = bedquantity * perbedwood;

  //   console.log(chairqantity, tablequantity, bedquantity);
  const totalwood = chairwood + tablewood + bedwood;
  return totalwood;
}
const productquantity = woodcalculator(2, 2, 5);
console.log("total wood requred", productquantity);
