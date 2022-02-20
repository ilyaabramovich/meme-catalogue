const buildFilename = (file) => `${Date.now()}-${file.originalname}`

module.exports = {
  buildFilename
}