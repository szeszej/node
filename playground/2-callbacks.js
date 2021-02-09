// setTimeout(() => {
//   console.log('2 seconds rule!')
// }, 2000)

// const geoCode = (address, callback) => {
//   setTimeout(() => {
//     const data = 'aaa'
//     callback(data)
//   }, 3000)
// }

// geoCode('ćośtam', (data) => console.log(data))

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b)
  }, 2000)
}

add(1, 4, (sum) => {
  console.log(sum) // Should print: 5
})
