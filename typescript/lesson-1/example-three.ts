function selectDeliveryAddress(addressOrIndex: any) {
  if (typeof addressOrIndex === 'number') {
    addressOrIndex.toFixed(10);
  }
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