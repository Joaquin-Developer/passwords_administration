
const Crypto = require("crypto-js")

module.exports = class PasswordEncryption {

    static encrypt = (textPlain) => {
        return Crypto.AES.encrypt(textPlain, 'key').toString()
    }

    static decrypt = (ciphertext) => {
        let bytes = Crypto.AES.decrypt(ciphertext, 'key')
        return bytes.toString(Crypto.enc.Utf8)
    }

}
