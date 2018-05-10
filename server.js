// This API design draws on a Udacity example
// https://github.com/wicker/Terrific-Tree-Frogs-Message-Board/blob/master/backend/

require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')
const art = require('./art')

const app = express()

app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
  const instructions = `
  <pre>
    Joseph Art Walk API

    GET /art
      USAGE:
        Get all of the art items available for the app.
  </pre>
  `

  res.send(instructions)
})

app.get('/art', (req, res) => {
  art.getAllData()
    .then(
        (data) => res.send(data),
        (error) => {
          console.error(error)
          res.status(500).send({
            error: 'An error occurred.'
          })
        }
    )
})

app.listen(config.port, () => {
    console.log('Server listening on port %s, Ctrl+C to stop', config.port)
})
