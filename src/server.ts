import express from 'express'
import fs from 'fs'
import multer from 'multer'
import { not as isNotJunk } from 'junk'

const cors = require('cors')
const path = require('path')
const server = express()

server.use(cors())
server.use(express.urlencoded({ extended: true }))

// Configure Multer Middleware and Storage

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname.replace('/src', '/piktoImages'))
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').slice(-1)
    cb(null, 'uploads-' + Date.now() + '.' + ext)
  },
})

const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: any
) => {
  if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
    cb(null, true)
  } else {
    cb('Failed: format not supported')
  }
}

const uploadMiddleware = multer({ storage, fileFilter }).single('upload')

server
  .use('/piktoImages', express.static(path.join(__dirname, '../piktoImages')))
  .post(`/uploads`, (req, res) => {
    uploadMiddleware(req, res, (err) => {
      if (err || !req.file) {
        res.status(400).json({
          message: err,
        })
      } else {
        res.status(200).json({
          file:
            req.protocol +
            '://' +
            req.get('host') +
            '/img/' +
            req.file.filename,
        })
      }
    })
  })
  .get('/images', (req, res) => {
    const filePath = req.protocol + '://' + req.get('host') + '/piktoImages/'
    const files = fs
      .readdirSync(path.normalize(__dirname).replace('/src', '/piktoImages'))
      .filter(isNotJunk) // remove .DS_STORE etc
      .map((url) => filePath + url) // map with url path
      
    res.json(files)
  })
  .get(`/`, (req, res) => {
    res.sendFile(`/index.html`)
  })
  .listen(8000, () => {
    console.log('Server started. listening to 8000')
  })
