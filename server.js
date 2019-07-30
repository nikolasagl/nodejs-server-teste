const express = require('express')
const bodyParser = require('body-parser')
const router = require('./src/routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', router)

app.listen(3001)
