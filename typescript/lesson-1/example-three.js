"use strict";
function selectDeliveryAddress(addressOrIndex) {
    if (typeof addressOrIndex === 'number') {
        addressOrIndex.toFixed(10);
    }
}
function sembarangFunction({ name, city, foo } = { name: "lorem", city: "ipsu", foo: "bar" }) {
    console.log({
        name,
        city,
        foo
    });
}
sembarangFunction();
