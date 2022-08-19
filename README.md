## Roquet Quis

# Organização de pastas

- node_modules
- projeto
- src
  - view
- package-lock.json
- package.json
- README.md

# Procedimento de instalação do node

installing node

npm init -y

npm install ejs

npm install express

server.js (servidor)

# packcage.json

node src/server.js

or

"scripts": {
"start": "node src/server.js"
},

terminal: npm start

# Dependência pra ajudar no desenvolvimento

# packcage.json

npm install nodemon -D
funciona como um live-server onde não se precisa fechar e reabrir a aplicação para ver as alterações

"scripts": {
"start": "nodemon src/server.js" in package.json
},

or

"scripts": {
"start": "nodemon ."
},

"main": "src/server.js",

npm install sqlite

npm install sqlite3
