const express = require('express')
const { uploadFile } = require('../controllers/uploads')

const uploadsRouter = express.Router()
uploadsRouter.post('/', uploadFile)

module.exports = uploadsRouter