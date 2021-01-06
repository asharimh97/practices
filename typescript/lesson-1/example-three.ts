const deliveryAddreses: string[] = [];

function selectDeliveryAddress(addressOrIndex: unknown): string {
  if (typeof addressOrIndex === 'number') {
    addressOrIndex.toFixed(10);
    return deliveryAddreses[addressOrIndex];
  } else if (typeof addressOrIndex === 'string' ) {
    return addressOrIndex;
  }

  return ''
}

interface SembarangProp {
  name: string;
  city: string;
  foo: string;
}

// Jajal default value di object, ternyata enggak bisa
// terus gimana ya cara bikin defaultProps kalo make ini di React

// function sembarangFunction({ name, city, foo }: SembarangProp = { name: "lorem", city: "ipsu" }) {
//   console.log({
//     name,
//     city,
//     foo
//   })
// }

// sembarangFunction({ foo: "bar" });