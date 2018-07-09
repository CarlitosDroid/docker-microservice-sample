/**
 * 
 * @param {*} app The express application
 * @param {*} options The repositories instances
 */
module.exports = (app, userRepository) => {

    // define the users home page
    app.get('/', function(req, res) {
        userRepository.getUser().then((result) => {
            res.send(result)
        }).catch((err) => {

        });

    })

    // define the users about page
    app.get('/about', function(req, res) {
        res.send("USERS ABOUT")
    })
}