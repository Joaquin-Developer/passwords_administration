
const PasswordsAdministration = require("../modules/PasswordsAdministration")

module.exports = class PasswordController {

    static getAll = async (req, res) => {

        PasswordsAdministration.getAll()
        .then(data => res.status(200).json(data))
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: true, message: "INTERNAL_SERVER_ERROR" })
        })
    }

    static getSpecificPassword = (req, res) => {
        let { id, name } = req.body

        if (id || name) {
            PasswordsAdministration.getSpecificPassword(id, name)
            .then(data => res.status(200).json(data))
            .catch(error => {
                console.log(error)
                res.status(500).json({ error: true, message: "INTERNAL_SERVER_ERROR" })
            })
        } else {
            res.status(500).json({ error: true, message: "MISING_DATA_IN_REQUEST"})
        }

    }

    static updatePassword = (req, res) => {
        let { id, name, newPassword } = req.body

        if ((id || name) && newPassword) {
            PasswordsAdministration.updatePassword(id, name, newPassword)
            .then(data => res.status(200).json(data))
            .catch(error => {
                console.log(error)
                res.status(500).json({ error: true, message: "INTERNAL_SERVER_ERROR" })
            })
        } else {
            res.status(500).json({ error: true, message: "MISING_DATA_IN_REQUEST"})
        }
    }

    static deletePasswordRegister = (req, res) => {
        let { id, name } = req.body

        if (id || name) {
            PasswordsAdministration.deletePasswordRegister(id, name)
            .then(data => res.status(200).json(data))
            .catch(error => {
                console.log(error)
                res.status(500).json({ error: true, message: "INTERNAL_SERVER_ERROR" })
            })
        } else {
            res.status(500).json({ error: true, message: "MISING_DATA_IN_REQUEST"})
        }
    }

}