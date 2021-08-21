
module.exports = class PasswordsAdministration {

    static getAll = () => {
        try {
            // connect()
            return new Promise((resolve, reject) => {
                // const query = "select * from Passwords"
                // connection.query(query, (error, rows, fields) => {
                //     if (error) return reject(error)
                //     return resolve(rows)
                // })
                return resolve({ data: true })
            })
            // disconnect()
        } catch (error) { return error }
    }

    
}