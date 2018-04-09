function createBookShop(inventory) {
  return {
    inventory,
    // omit the word function and the colon for simplicity
    inventoryValue() {
      return this.inventory.reduce(
        (accumulator, book) => total + book.price,
        0
      );
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: "Harry Potter", price: 10 },
  { title: "Eloquent Javascript", price: 15 }
];

const bookShop = createBookShop(inventory);
let bookShopValue = bookShop.inventoryValue();
let bookPrice = bookShop.priceForTitle("Harry Potter");
