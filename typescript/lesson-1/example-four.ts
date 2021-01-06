type Article = {
  title: string,
  price: number,
  vat: number,
  stock: number,
  description: string
};

const movie: Article = {
  title: "Helvetica",
  price: 200,
  vat: 0.2,
  stock: 1000,
  description: "lorem ipsum dolorsit amet"
};

const movBackup = {
  title: "Helvetica",
  price: 200,
  vat: 0.2,
  stock: 1000,
  description: "lorem ipsum dolorsit amet",
  rating: 5
};

const movBackup2 = {
  title: "Helvetica",
  price: 200,
  vat: 0.2,
  rating: 5
};

const movie2: Article = movBackup;

function createArticleElement(article: { title: string, price: number, rating: number }): string {
  const { title, price }  = article;
  return `Buy: ${title} with price of: $${price}`;
}

createArticleElement(movBackup);

createArticleElement(movBackup);