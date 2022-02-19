const mongoose = require('mongoose')
const { Schema } = mongoose

const fileSchema = new Schema({
  length: { type: Number },
  chunkSize: { type: Number },
  uploadDate: { type: Date },
  filename: { type: String, trim: true, searchable: true },
  md5: { type: String, trim: true },
}, { collection: 'memes.files', id: false });

module.exports = mongoose.model('File', fileSchema);