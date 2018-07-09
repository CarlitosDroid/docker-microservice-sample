var express = require('express')

/**
 * The start function start the nodejs server and define the different routes.
 * @param {*} userRepository The initialize UserRepository
 * @param {*} serverPort Ther server port
 */
module.exports.start = (userRepository, serverPort) => {
    return new Promise((resolve, reject) => {

        //Setting up express
        var app = express()

        // Add the APIs to the app.
        require('../routes/users')(app, userRepository)

        var server = app.listen(serverPort, () => {
            resolve(server)
        })
    })
}