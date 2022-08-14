const express = require('express')
const route = require('./route')
const path = require('path')

//Executando o express
const server = express()

//view engine será o ejs
server.set('view engine', 'ejs')

//Caminho pra pasta Public
server.use(express.static('public'))

//path: caminho do projeto. join: junta o caminho do projeto com __dirname(src/) com "views"
server.set('views', path.join(__dirname, 'views'))

// middleware vai decodificar antes de passar para o controller
server.use(express.urlencoded({ extended: true }))

server.use(route)

//Passando uma porta(servidor)
server.listen(3000, () => console.log('rodando'))
