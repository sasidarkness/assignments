class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  discountedPrice(discount) {
    return this.price - (this.price * discount / 100);
  }
}

const p1 = new Product("Phone", 20000);
console.log(p1.discountedPrice(10)); 
