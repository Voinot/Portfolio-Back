const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./src/routes/index')
const app = express

const { port } = require('./src/helper/conf')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/project', routes.Project)

app.listen(port, (err) => {
    if (err) throw err
    console.log(`listening on port ${port}`)
})