const express =require('express');
const experienceDevController = require("../controllers/experienceDev");
const router = express.Router();

router.get("/", experienceDevController.getExperienceDev);
router.post("/", experienceDevController.postExperienceDev);
router.put("/:id", experienceDevController.updateExperienceDev);
router.delete("/:id", experienceDevController.deleteExperienceDev);


module.exports = router;