const shoppingcart = [
  { name: "shoe", price: 1200 },
  { name: "shirt", price: 1400 },
  { name: "tshirt", price: 200 },
  { name: "belt", price: 600 },
  { name: "pant", price: 2000 },
];

function totalcoast(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const totalprice = product.price * product.quantity;
    sum = sum + totalprice;
    // console.log(product);
  }
  return sum;
}
const expense = totalcoast(shoppingcart);
console.log("total expense today", expense);
