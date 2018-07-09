//Internal Dependencies
var config = require('./config/config')
var user_repository = require('./repository/user_repository')
var server = require('./server/server')

user_repository.connect(config.db).then((userRepository) => {
    console.log("CONNECTED MYSQL SERVER. STARTING SERVER")

    return server.start(userRepository, config.serverPort)

}).then((app) => {
    console.log("Server started successfully, running on port " + config.serverPort + ".");
})