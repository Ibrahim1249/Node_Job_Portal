
const express = require("express");
const {jobPost , getAllJobs , updateJob , deleteJob} = require("../Controllers/job")
const router = express.Router()

router.post("",jobPost);
router.get("",getAllJobs);
router.patch("/:id",updateJob);
router.delete("/:id" , deleteJob)


module.exports = router;