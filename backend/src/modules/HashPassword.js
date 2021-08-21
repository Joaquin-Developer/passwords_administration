
const bcrypt = require("bcrypt")

module.exports = class HashPassword {

    static encrypt = (passwordPlainText, callback) => {
        bcrypt.hash(passwordPlainText, 8, (err, hash) => {
            if (error) throw error
            callback()
        })
    }

    static compare = (passwordPlainText, callback) => {

        bcrypt.compare(passwordPlainText, hash, (err, result) => {
            callback(result)
        })
    }

}
