const Meme = require('../models/meme')

const getMemes = (req, res, next) => {
  Meme.find({})
    .then((memes) => res.send({ data: memes }))
    .catch(next)
}

const getMeme = (req, res, next) => {
  Meme.findOne({ id: req.params.id })
    .then((meme) => res.send({ data: meme }))
    .catch(next)
}

const createMeme = (req, res, next) => {
  Meme.create(req.body)
    .then((meme) => res.status(201).send({ data: meme }))
    .catch(next)
}

module.exports = {
  getMemes,
  getMeme,
  createMeme,
}
