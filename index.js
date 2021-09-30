const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const routesArticle = require('./routes/article')
const routesLogin = require('./routes/login')

let corsOption = {
  origin : '*'
}

app.use(cors(corsOption))


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/articles', routesArticle)
app.use('/login', routesLogin)




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})