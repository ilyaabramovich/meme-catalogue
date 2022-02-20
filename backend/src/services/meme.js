const uploadFile = require("../middleware/upload");
const Meme = require("../models/meme");
const mongoose = require("mongoose");

const addMeme = async (req, res) => {
  const session = await mongoose.startSession();

  try {
    const result = await session.withTransaction(async () => {
      await uploadFile(req, res);
      console.log(req.file);
      if (req.file === undefined) {
        return
      }
      const {description} = req.body
      return await Meme.create({description, file: req.file.id})
    })

    if (result) {
      return {success: true, payload: result}
    } else {
      return {success: false}
    }
  } catch (error) {
    console.log(`Unexpected error during transaction: ${error}`)
  } finally {
    await session.endSession();
  }
}

module.exports = {addMeme}