
const PasswordsAdministration = require("../modules/PasswordsAdministration")
const PasswordEncryption = require("../modules/PasswordEncryption")


module.exports = class PasswordController {

    static getOnlyAllRegisters = async (req, res) => {
        
        PasswordsAdministration.getOnlyAllRegisters()
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
            // .then(data => res.status(200).json(data))
            .then(data => {
                let passw = new Object(data)

                if (passw.length == 0) {
                    res.status(200).json({ status: false, message: "REGISTER_NOT_FOUND" }) 
                } else {
                    const data = PasswordEncryption.decrypt(passw[0].hash)
                    res.status(200).json({ status: true, passw: data }) 
                }
                
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ error: true, message: "INTERNAL_SERVER_ERROR" })
            })
            
        } else {
            res.status(500).json({ error: true, message: "MISING_DATA_IN_REQUEST"})
        }

    }

    static newPasswordRegister = (req, res) => {
        let { nameRegistration, domian, password } = req.body
            PasswordsAdministration.newPasswordRegister(nameRegistration, domian, password)
            .then(data => res.status(200).json(data))
            .catch(error => {
                console.log(error)
                res.status(500).json({ error: true, message: "INTERNAL_SERVER_ERROR" })
            })

        if (nameRegistration && domian && password) {

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