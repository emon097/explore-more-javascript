const shoppingcart = [
  { name: "shoe", price: 1200, quantity: 2 },
  { name: "shirt", price: 1400, quantity: 4 },
  { name: "tshirt", price: 200, quantity: 3 },
  { name: "belt", price: 600, quantity: 5 },
  { name: "pant", price: 2000, quantity: 2 },
];

function totalcoast(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    sum = sum + product.price;
    // console.log(product);
  }
  return sum;
}
const expense = totalcoast(shoppingcart);
console.log("total expense today", expense);
