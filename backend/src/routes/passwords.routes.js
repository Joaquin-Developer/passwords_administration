const { Router } = require("express")
const router = Router()
const controller = require("../controllers/password.controller")

router.get("/getOnlyAllRegisters", controller.getOnlyAllRegisters)
router.get("/getSpecificPassword", controller.getSpecificPassword)
router.post("/updatePassword", controller.updatePassword)
router.post("/newPasswordRegister", controller.newPasswordRegister)
router.delete("/deletePasswordRegister", controller.deletePasswordRegister)

module.exports = router