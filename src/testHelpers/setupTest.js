require('../../config/env.test')
const LocalStorageMock = require('./localStorage.mock.js')

global.localStorage = new LocalStorageMock()

process.on('unhandledRejection', (err) => {
  throw err
})
