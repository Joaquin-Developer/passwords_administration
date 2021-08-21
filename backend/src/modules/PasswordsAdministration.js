
const { connection, connect, disconnect } = require("../database")
// const HashPassword = require("./HashPassword")
const PasswordEncryption = require("./PasswordEncryption")

module.exports = class PasswordsAdministration {

    static getOnlyAllRegisters = () => {
        try {
            return new Promise((resolve, reject) => {
                const query = `
                    select IdRegistration, NameRegistration, domian, RegistrationIsActive
                    from PasswordRegistration
                    where RegistrationIsActive = 1`

                connection.query(query, (error, rows, fields) => {
                    if (error) return reject(error)
                    return resolve(rows)
                })
            })
        } catch (error) { return error }
    }
    
    static getSpecificPassword = (id = null, name = null) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `
                    select HashPassword "hash" from PasswordRegistration
                    where IdRegistration = ${id} or NameRegistration = "${name}"`

                connection.query(query, (error, rows, fields) => {
                    if (error) return reject(error)
                    return resolve(rows)
                })
            })

        } catch (error) { return error }
    }

    static newPasswordRegister = (nameRegistration, domian, password) => {

    }

    static updatePassword = (id, name, newPassword) => {

    }

    static deletePasswordRegister = (id, name) => {

    }

    
}