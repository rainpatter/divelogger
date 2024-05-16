const multer = require('multer')
const cloudinary = require('cloudinary').v2
const cloudinaryStorage = require('multer-storage-cloudinary').CloudinaryStorage

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const upload = multer({
    storage: new cloudinaryStorage({
      cloudinary: cloudinary,
      params: {
        folder: "file-upload-demo"
      }
    })
  })
  
  module.exports = upload