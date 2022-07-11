const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json({}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(morgan('combined'))
app.use(compression())
app.use(helmet())
app.disable('x-powered-by')

require('./src/appServices/routes')(app)

app.use((_, res) => res.status(404).json({ error: [{ title: '404', message: 'Route not found' }] }))

module.exports = app
