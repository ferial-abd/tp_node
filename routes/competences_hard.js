const express = require('express');
const router = express.Router();
const CompetenceHardController = require('../controllers/competenceHard.js')

    router.get("/", CompetenceHardController.getCompetenceHard)
    router.post("/", CompetenceHardController.postCompetenceHard)
    router.put("/:id", CompetenceHardController.updateCompetenceHard)
    router.delete("/:id", CompetenceHardController.deleteCompetenceHard)

module.exports = router;