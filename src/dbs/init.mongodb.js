'use strict'

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const { db: {host, name, port} } = require('../configs/config.mongodb')
const connectString = `mongodb://${host}:${port}/${name}`

class Database {
    
    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        if(1 === 1){
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true})
        }

        mongoose.connect(connectString, {
            maxPoolSize: 50
        }).then( _ => {
            console.log(`connected to mongodb`)
        })
        .catch(err => console.log(`Connection error:: ${err}`))
    }

    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instance = Database.getInstance()
module.exports = instance