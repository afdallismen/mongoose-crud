const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000
const dbName = 'mongoose-crud'
const dbUrl = 'mongodb://localhost/' + dbName

mongoose.connect(dbUrl, { useNewUrlParser: true })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)

app.listen(PORT, _ => {
  console.log('Listening on port %i...', PORT)
})