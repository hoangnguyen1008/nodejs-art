const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const app = express()

// init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// init DB
require('./dbs/init.mongodb')
const { countConnect } = require('./helper/check.connect')
countConnect()
checkOverload()
// init routers
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'welcome to nodejs-art'
    })
})

// handle errors
module.exports = app