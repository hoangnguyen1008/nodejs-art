const app = require('./src/app')

const PORT = 3333

const server = app.listen( PORT, () => {
    console.log(`Server started with ${PORT}`)
})

process.on('SIGINT', () => {
    server.close(() => console.log(`Server Closed`))
    // send ALERT to system if necessary
})