const defaultOrder = {
  articles: [
    {
      price: 1000,
      vat: 0.2,
      title: "Lorem ipsum"
    }
  ],
  customer: {
    name: "Foo Bar",
    address: {
      street: "Jalan Kaliurang",
      zip: 50000,
      city: "Lorem Urang",
      number: 12
    },
    dateOfBirth: new Date()
  },
}

type Order = typeof defaultOrder;