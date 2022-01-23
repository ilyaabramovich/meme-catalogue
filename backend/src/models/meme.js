const mongoose = require('mongoose')
const { Schema } = mongoose

const memeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 150,
    default: '',
  },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
})

module.exports = mongoose.model('Meme', memeSchema)
