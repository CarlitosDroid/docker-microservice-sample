'use strict';

var mysql = require('mysql');

//const mysql = require('mysql')

class UserRepository {

    constructor(connectionSettings) {
        this.connectionSettings = connectionSettings;
        this.connection = mysql.createConnection(this.connectionSettings);
    }

    getUser() {
        return new Promise((resolve, reject) => {

            this.connection.query('SELECT firstName FROM USER', (err, results) => {
                if (err) {
                    this.connection = mysql.createConnection(this.connectionSettings);
                    return reject(new Error('An error occured getting the users: ' + err));
                }

                resolve((results || []).map((user) => {
                    return {
                        name: user.firstName
                    };
                }));
            });

        });
    }
}

module.exports.connect = (databaseSettings) => {
    return new Promise((resolve, reject) => {
        if (!databaseSettings.host) throw new Error("A host must be specified.");
        if (!databaseSettings.user) throw new Error("A user must be specified.");
        if (!databaseSettings.password) throw new Error("A password must be specified.");
        if (!databaseSettings.port) throw new Error("A port must be specified.");

        resolve(new UserRepository(databaseSettings));
    });
};