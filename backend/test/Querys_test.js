
const PasswordsAdministration = require("../src/modules/PasswordsAdministration")
const PasswordEncryption = require("../src/modules/PasswordEncryption")

PasswordsAdministration.getSpecificPassword(1)
.then(data => {
    let passw = new Object(data)
    
    if (passw.length == 0) {
        console.log({ status: false, message: "" })
    } else {
        const hash = passw[0].hash
        decr = PasswordEncryption.decrypt(hash)
        console.log(decr)
    }
    
})



// .then(data => console.log(new Object(data)))
