const {GridFsStorage} = require("multer-gridfs-storage");
const multer = require("multer");
const util = require("util");

const supportedMimeTypes = ["image/png", "image/jpeg", "image/gif"];

const storage = new GridFsStorage({
  url: process.env.DB_URL,
  options: {useNewUrlParser: true, useUnifiedTopology: true},
  file: (req, file) => {
    const filename = `${Date.now()}-${file.originalname}`
    if (!supportedMimeTypes.includes(file.mimetype)) {
      return filename;
    }

    return {
      bucketName: process.env.BUCKET,
      filename
    };
  }
});

const upload = multer({ storage: storage }).single("file");

module.exports = util.promisify(upload);