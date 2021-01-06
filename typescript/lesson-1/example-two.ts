function addVAT(price: number, vat: number = 0.2): number {
  return price * (1 + vat);
}

const vatPrice = addVAT(30, 0.2);

console.log(vatPrice);