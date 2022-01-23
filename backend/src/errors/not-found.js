class NotFoundError extends Error {
  constructor(message = 'The resource you requested is not found') {
    super(message)
    this.statusCode = 404
  }
}

module.exports = NotFoundError
