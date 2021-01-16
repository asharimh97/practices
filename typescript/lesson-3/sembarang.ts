interface Customer {
  orderId: number;
  name: string;
  cashier: string;
}

interface Product {
  productId: number;
  name: string;
  description: string;
}

interface Order {
  orderId: number;
  products: Product[];
  customer: Customer;
}

type FetchParam = Customer | Product | number;

type FetchReturn<Param extends FetchParam> = Param extends Customer ? Order[] : Param extends Product ? Order[] : Order;

function fetchOrder<Param extends FetchParam>(order: Param): FetchReturn<Param> {
  return;
}

const customer = {
  orderId: 123,
  name: "asd",
  cashier: "asd"
}

fetchOrder(customer);
fetchOrder("customer");