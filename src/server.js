const express = require('express')
const route = require('./route')

//Executando o express
const server = express()

server.use(route)

//Passando uma porta(servidor)
server.listen(3000, () => console.log('rodando'))
