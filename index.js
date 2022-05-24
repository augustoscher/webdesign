const express = require('express')
const app = express()
const port = 3003

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
