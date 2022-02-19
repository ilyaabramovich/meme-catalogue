const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const memes = require('./routes/memes')
const uploads = require('./routes/uploads')
const NotFoundError = require('./errors/not-found')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/memes', memes)
app.use('/uploads', uploads)

app.all('*', (req, res, next) => {
  next(new NotFoundError('The resource you requested is not found'))
})

app.use((error, req, res, next) => {
  const {statusCode = 500, message} = error
  res.status(statusCode).send({message: statusCode === 500 ? 'Internal server error' : message})
  next()
})

const {PORT = 3001, DB_URL} = process.env

try {
  mongoose.connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
