/*
1 if ticket number less than 100. per ticket price 100
2 if ticket number more than 100. but less than 200. first 100 ticket will be 100/ticket rest ticket will be 90 tk per peice
3 if you purchase more than 200 ticket
first 100 ---> 100tk
101 --->200 = 90tk
200+ ---> = 70tk
*/

function ticketprice(ticketQanity) {
  const first100rate = 100;
  const second100rate = 90;
  const restticketrate = 70;
  if (ticketQanity <= 100) {
    const price = ticketQanity * first100rate;
    return price;
  } else if (ticketQanity <= 200) {
    const first100price = 100 * first100rate;
    const restticketquantity = ticketQanity - 100;
    const restticketprice = restticketquantity * second100rate;
    const totalprice = first100price + restticketprice;
    return totalprice;
  } else {
    const first100price = 100 * first100rate;
    const second100price = 100 * second100rate;
    const restticketquantity = ticketQanity - 200;
    const restticketprice = restticketquantity * restticketrate;
    const totalcoast = first100price + second100price + restticketprice;
    return totalcoast;
  }
}
const price = ticketprice(100);
console.log("price", price);
