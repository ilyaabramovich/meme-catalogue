require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const memes = require('./routes/memes')
const NotFoundError = require('./errors/not-found')

const app = express()

app.use(bodyParser.json())
app.use('/memes', memes)

app.get('/', async () => {
  return { hello: 'world' }
})

app.all('*', (req, res, next) => {
  next(new NotFoundError('The resource you requested is not found'))
})

app.use((error, req, res, next) => {
  const { statusCode = 500, message } = error
  res.status(statusCode).send({ message: statusCode === 500 ? 'Internal server error' : message })
  next()
})

const { PORT = 3001, DB_URL } = process.env

mongoose.connect(DB_URL)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
