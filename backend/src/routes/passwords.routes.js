const { Router } = require("express")
const router = Router()
const controller = require("../controllers/password.controller")

router.get("/getAll", controller.getAll)
router.get("/getSpecificPassword", controller.getSpecificPassword)
router.post("/updatePassword", controller.updatePassword) 
router.delete("/deletePasswordRegister", controller.deletePasswordRegister)

module.exports = router