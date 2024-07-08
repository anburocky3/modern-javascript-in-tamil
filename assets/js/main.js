class ShoppingItem {
  static totalCount = 0

  constructor(name, amount) {
    this.name = name
    this.amount = amount
    this.constructor.totalCount++
  }

  static getTotalCount() {
    return this.totalCount
  }

  display() {
    return `Product name is: ${this.product} and its cost is ₹${this.cost}`
  }
}

const product1 = new ShoppingItem('iPhone', 60000)
const product2 = new ShoppingItem('Remote Car', 4999)
const product3 = new ShoppingItem('Play Station 6', 45000)

console.log(ShoppingItem.getTotalCount())
