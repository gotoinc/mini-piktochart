export default (api) => ({
  getUploadedImages: () => api.get('/images'),
})
