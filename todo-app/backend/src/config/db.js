const mongoose = require('mongoose')
mongoose.Promise = global.Promise // remove the warning of internal PROMISE API of mongoose
module.exports = mongoose.connect('mongodb://localhost/todo')

