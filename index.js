const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

app.get('/api/todos', (request, response) => {
  response.json({
    title: 'What?'
  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
