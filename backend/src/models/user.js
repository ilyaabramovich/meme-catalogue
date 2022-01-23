const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    default: 'Жак-Ив Кусто',
  },
  favourites: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})

module.exports = mongoose.model('User', userSchema)
