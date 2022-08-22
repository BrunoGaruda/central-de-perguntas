const Database = require('./config')

const initDb = {
  async init() {
    const db = await Database()

   await db.exec("CREATE TABLE rooms (
    id INTEGER PRIMARY KEY,
    pass TEXT
  )");

  await db.exec("CREATE TABBLE questions(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    check INT
  )");

  await db.close()
  }
}

initDb.init()

// Comando SQL sempre maiúsculo

// CREATE TABLE rooms (
//   id INTEGER PRIMARY KEY,
//   pass TEXT
// )

// CREATE TABBLE questions(
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   titulo TEXT,
//   check INT
// )