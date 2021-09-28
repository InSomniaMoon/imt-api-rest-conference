const express = require('express')

const app = express()
const port = 3000
const bodyParser = require("body-parser");
const routes = require('./routes/article')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/article',routes)



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})