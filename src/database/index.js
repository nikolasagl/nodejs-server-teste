const mongoose = require('mongoose')

// Iniciando DB
mongoose.connect(
  'mongodb://localhost:27017/fmiapi',
  { useNewUrlParser: true }
)

mongoose.Promise = global.Promise

module.exports = mongoose
