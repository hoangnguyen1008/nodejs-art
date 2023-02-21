'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')

const _SECONDS = 5000

const countConnect = () => {
    const numConnection = mongoose.numConnection.length
    console.log(`Number of connection: ${numConnection}`)
}

// Monitor every 5s
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.numConnection.length
        const numCores = os.cpus().length // check number of CPU core
        const memoryUse = process.memoryUsage.rss //check memory use
        console.log(`active connection: ${numConnection}`)
        console.log(`memory usage: ${memoryUse / 1024 / 1024}`) //Megabytes
        //example: maximum connection based on number of cores
        const maxConnection = numCores * 5
        if(numConnection > maxConnection) {
            console.log(`connection overload detected`)
        }
    }, _SECONDS)
}

module.exports = {
    countConnect,
    checkOverload
}