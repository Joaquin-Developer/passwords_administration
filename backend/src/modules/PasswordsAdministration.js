
const { connection, connect, disconnect } = require("../database")
const HashPassword = require("./HashPassword")

module.exports = class PasswordsAdministration {

    static getOnlyAllRegisters = () => {
        try {
            return new Promise((resolve, reject) => {
                const query = `select IdRegistration, NameRegistration, domian, RegistrationIsActive
                    from PasswordRegistration`

                connection.query(query, (error, rows, fields) => {
                    if (error) return reject(error)
                    return resolve(rows)
                })
            })
        } catch (error) { return error }
    }
    
    static getSpecificPassword = (id, name) => {

    }

    static newPasswordRegister = (nameRegistration, domian, password) => {

    }

    static updatePassword = (id, name, newPassword) => {

    }

    static deletePasswordRegister = (id, name) => {

    }

    
}