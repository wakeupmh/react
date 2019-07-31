const express = require('express')
module.exports = server =>{
    // API ROUTES
    const router = express.Router()
    server.use('/api', router) //my middleware
    
    // TODO ROUTES
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
    
}