const phones = [
  { names: "walton", camera: 13, storage: "32gb", price: 20000 },
  { names: "iphone", camera: 50, storage: "240gb", price: 200000 },
  { names: "redmi", camera: 45, storage: "120gb", price: 24000 },
  { names: "xaomi", camera: 25, storage: "120gb", price: 35000 },
  { names: "htc", camera: 30, storage: "64gb", price: 25000 },
  { names: "nokia", camera: 108, storage: "240gb", price: 45000 },
];

function chepestphone(phones) {
  let chepest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];

    if (phone.price < chepest.price) {
      chepest = phone;
    }
  }
  return chepest;
}

const myselection = chepestphone(phones);
console.log(myselection);
