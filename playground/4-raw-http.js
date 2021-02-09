const http = require('http')

const url = `http://api.weatherstack.com/current?access_key=ba9d10fcb561e8f08bac12df4da64d40&query=40,-75`

const request = http.request(url, (response) => {
  let data = ''
  response.on('data', (chunk) => {
    data += chunk.toString()
  })
  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', (error) => {
  console.log('error', error)
})

request.end()
