const Meme = require('../models/meme')
const {addMeme} = require('../services/meme')

const getMemes = (req, res, next) => {
  Meme.find({})
    .then((memes) => res.send({data: memes}))
    .catch(next)
}

const getMeme = (req, res, next) => {
  Meme.findOne({id: req.params.id}).populate('file')
    .then((memes) => res.send({data: memes}))
    .catch(next)
}

const createMeme = (req, res, next) => {
  addMeme(req, res).then(result => {
    if (result.success) {
      return res.status(201).send({data: result.payload})
    } else {
      return res.status(400)
    }
  }).catch(next)
}

module.exports = {
  getMemes,
  getMeme,
  createMeme,
}
