const express = require('express')
const mongoose = require('mongoose')

// Iniciando App
const app = express()
app.use(express.json())

// Iniciando DB
mongoose.connect(
  'mongodb://localhost:27017/fmiapi',
  { useNewUrlParser: true }
)

app.use('/api', require('./src/routes'))

app.listen(3001)
