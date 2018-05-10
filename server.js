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
  <pre style="margin: 20px 0 0 0; padding: 0; font-size: 18px;">
    Joseph Art Walk API

    GET /art
      USAGE:
        Get all of the art items available for the app.
        <a href="https://api.josephartwalk.org/art">https://api.josephartwalk.org/art</a>
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

app.listen(8080, '172.30.0.217');
//app.listen(config.port, () => {
//    console.log('Server listening on port %s, Ctrl+C to stop', config.port)
//})
