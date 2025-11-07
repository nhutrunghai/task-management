const { Router } = require("express")
const taskController = require("../controller/task.controller")
const router = Router();
router.get("/",taskController.index)
router.get("/detail/:id",taskController.detail)
router.patch("/change-status/:id",taskController.changeStatus)
module.exports = router