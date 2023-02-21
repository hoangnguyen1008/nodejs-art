'use strict'

const mongoose = require('mongoose')
const connectString = `mongodb://localhost:9999/shopDEV`

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
        .catch(err => console.log(`Connection error`))
    }

    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}