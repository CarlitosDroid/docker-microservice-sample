/**
 * This file contains the main settings to stand up a nodejs server through the port
 * and another settings to make a connection to a database
 */
module.exports = {
    serverPort: process.env.PORT || 3000,
    db: {
        host: process.env.DATABASE_HOST || '127.0.0.1',
        database: 'UNFV',
        user: 'carlitosdroid',
        password: '123',
        port: 3306
    }
}