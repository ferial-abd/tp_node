const express = require('express');
const router = express.Router();
const CompetenceSoftController = require('../controllers/competenceSoft.js')

    router.get("/", CompetenceSoftController.getCompetenceSoft)
    router.post("/", CompetenceSoftController.postCompetenceSoft)
    router.put("/:id", CompetenceSoftController.updateCompetenceSoft)
    router.delete("/:id", CompetenceSoftController.deleteCompetenceSoft)

module.exports = router;