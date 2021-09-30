const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const routesArticle = require('./routes/article')
const routesLogin = require('./routes/login')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/articles', routesArticle)
app.use('/login', routesLogin)
app.use(cors())



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})