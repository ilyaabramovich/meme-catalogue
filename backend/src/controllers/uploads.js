const uploads = require('../middleware/upload')

const uploadFile = async (req, res) => {
  try {
    await uploads(req, res);
    console.log(req.file);
    if (req.file === undefined) {
      return res.status(400).send({
        message: "You must select a file.",
      });
    }
    return res.send({
      message: "File has been uploaded.",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      message: `Error when trying uploads file: ${error}`,
    });
  }
}

module.exports = {uploadFile}