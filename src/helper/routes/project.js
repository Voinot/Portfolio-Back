const express = require('express')
const { connection } = require('./conf')

const router = express.Router()

Router.get('/:id', (req, res) => {
  const sql = 'SELECT * FROM project'
  connection.query(sql, req.params.id, (err, result) => {
    if (err) {
      return res.status(500).send(`An error occured : ${err.message}`)
    }
    res.status(200).json(result)
  })
})



Router.post('/', (req, res) => {
  const sql = 'INSERT INTO project SET ?'
  connection.query(sql, req.body, (err, res) => {
    if (err) {
      return res.status(500).send(`An error occured : ${err.message}`)
    }
    const sql = 'SELECT * FROM project WHERE id = ?'
    connection.query(sql, result.insertId, (err, result) => {
      if (err) {
        return res.status(500).send(`An error occured : ${err.message}`)
      }
      res.status(201).json(result)
    })
  })
})


Router.put('/', (req, res) => {
  const { id } = req.body
  const sql = 'UPDATE project SET ? WHERE ?'
  connection.query(sql, [req.body, { id }], (err, res) => {
    if (err) {
      res.status(500).send(`Unexpected error, ${err.message}`)
    }
    const sql = 'SELECT * FROM project WHERE ?'
    connection.query(sql, { id }, (err, result) => {
      if (err) {
        res.status(500).send(`Unexpected error, ${err.message}`)
      }
      res.status(200).json(result)
    })
  })
})


module.exports = router
