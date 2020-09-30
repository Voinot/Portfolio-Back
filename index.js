const express = require('express')
const routes = require('./src/index')
const app = express

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(4000, (err) => {
    if (err) throw err
    console.log('listening on port 4000')
})