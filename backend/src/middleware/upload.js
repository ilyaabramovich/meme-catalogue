const {GridFsStorage} = require("multer-gridfs-storage");
const multer = require("multer");
const util = require("util");
const {SUPPORTED_MIME_TYPES} = require("../constants");
const {buildFilename} = require("../utils");

const storage = new GridFsStorage({
  url: process.env.DB_URL,
  options: {useNewUrlParser: true, useUnifiedTopology: true},
  file: (req, file) => {
    const filename = buildFilename(file);
    if (!SUPPORTED_MIME_TYPES.includes(file.mimetype)) {
      return filename;
    }

    return {
      bucketName: process.env.BUCKET,
      filename
    };
  }
});

const uploadFile = multer({storage: storage}).single("file");

module.exports = util.promisify(uploadFile);