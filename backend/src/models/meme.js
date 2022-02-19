const mongoose = require('mongoose')
const File = require('../models/file')
const { Schema } = mongoose

const memeSchema = new mongoose.Schema({
  description: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 300
  },
  file: { type: Schema.Types.ObjectId, ref: 'File' },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
})

module.exports = mongoose.model('Meme', memeSchema)
