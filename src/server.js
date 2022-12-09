'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const fs_1 = __importDefault(require('fs'))
const multer_1 = __importDefault(require('multer'))
const junk_1 = require('junk')
const cors = require('cors')
const server = (0, express_1.default)()
server.use(cors())
server.use(express_1.default.urlencoded({ extended: true }))
// Configure Multer Middleware and Storage
const storage = multer_1.default.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/images')
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').slice(-1)
    cb(null, 'uploads-' + Date.now() + '.' + ext)
  },
})
const fileFilter = (req, file, cb) => {
  if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
    cb(null, true)
  } else {
    cb('Failed: format not supported')
  }
}
const uploadMiddleware = (0, multer_1.default)({ storage, fileFilter }).single(
  'upload'
)
server
  .use(express_1.default.static('./'))
  .post('/uploads', (req, res) => {
    uploadMiddleware(req, res, (err) => {
      if (err || !req.file) {
        console.error(err)
        res.status(400).json({
          message: err,
        })
      } else {
        res.status(200).json({
          file:
            req.protocol +
            '://' +
            req.get('host') +
            '/images/' +
            req.file.filename,
        })
      }
    })
  })
  .get('/images', (req, res) => {
    const filePath = req.protocol + '://' + req.get('host') + '/assets/'
    const files = fs_1.default
      .readdirSync(__dirname + '/assets')

      .filter(junk_1.not) // remove .DS_STORE etc
      .map((url) => filePath + url) // map with url path
    res.json(files)
  })
  .get('/', (req, res) => {
    res.sendFile('/index.html')
  })
  .listen(8000, () => {
    console.log('Server started. listening to 8000')
  })
