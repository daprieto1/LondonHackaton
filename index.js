const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')

let app = express();
let port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, access_token')
    next()
})

let formatController = require('./controllers/FormatController')

app.use('/api/format', formatController())

app.listen(port, () => console.log('App is running in port: ' + port))