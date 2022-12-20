import images from './services/images.js'
import uploads from './services/uploads.js'
import { apiRoot } from './instance.js'

const api = {
  images: images(apiRoot),
  uploads: uploads(apiRoot),
}
export { api }
