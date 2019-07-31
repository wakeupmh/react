const server = require('./config/server')
require('./config/db')
require('./config/routes')(server) // my method exported receive the server like a param