const express = require('express')

const route = express.Router()

//Requisition, Response
route.get('/', (req, res) => res.render('index'))

module.exports = route
