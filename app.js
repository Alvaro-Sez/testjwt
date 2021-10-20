const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes')

mongoose.connect('mongodb://127.0.0.1:27017/intento-jwt',{
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
app.use(express.json())
app.use(routes)
app.listen(3000,()=>console.log('server running on port 3000'))
