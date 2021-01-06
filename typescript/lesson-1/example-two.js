"use strict";
function addVAT(price, vat = 0.2) {
    return price * (1 + vat);
}
const vatPrice = addVAT(30, 0.2);
console.log(vatPrice);
