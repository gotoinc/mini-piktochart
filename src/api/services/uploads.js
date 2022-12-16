export default (api) => ({
  uploadImages: (params) => api.post('/uploads', params),
})
