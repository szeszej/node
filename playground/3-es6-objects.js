const name = 'Krzysiek'
const userAge = '34'

const user = {
  name,
  age: userAge,
  location: 'Śwdnik',
}

console.log(user)

//destructuring

const product = {
  label: 'Candy',
  price: 2,
  stock: 2000,
  salePrice: undefined,
}

const { label, price } = product
console.log(label)
console.log(price)

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction('order', product)
