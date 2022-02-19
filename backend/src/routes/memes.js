const express = require('express')
const { getMemes, getMeme, createMeme } = require('../controllers/memes')
const memesRouter = express.Router()

memesRouter.get('/', getMemes)

memesRouter.get('/:id', getMeme)

memesRouter.post('/', createMeme)

memesRouter.post('/upload', )

module.exports = memesRouter
