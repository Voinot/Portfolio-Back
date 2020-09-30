const mysql = require('mysql2')
require('dotenv').config()

const port = process.env.PORT

const connection = mysql.createPool({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_NAME
})


module.exports = { port,connection }


SQL_PASSWORD = defjamfv
SQL_HOST = localhost
SQL_USER = root
SQL_NAME = portofolio
PORT = 4000
