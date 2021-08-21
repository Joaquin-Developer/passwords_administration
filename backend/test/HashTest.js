
const PasswordEncryption = require("../src/modules/PasswordEncryption")

let enc = PasswordEncryption.encrypt("puto el que lo lea")

console.log(enc)

let dec = PasswordEncryption.decrypt(enc)
console.log(dec)
