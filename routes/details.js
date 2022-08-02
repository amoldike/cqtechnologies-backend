const express = require("express");

const router = express.Router();

const StudentDetailsController = require("../controllers/details");

router.post("/", StudentDetailsController.saveStudentDetails);

router.get("/", StudentDetailsController.getAllStudentsDetails);

router.get("/:userId", StudentDetailsController.getStudentDetails);

router.put("/:userId", StudentDetailsController.updateStudentDetails);

module.exports = router;
