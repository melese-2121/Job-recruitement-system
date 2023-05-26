const express = require("express");
const {
  getOrg,
  postJob,
  deleteRecentJob,
  editJob,
  findJob,
} = require("../controllers/Org");

const router = express.Router();

//Create new org
router.post("/getOrg", getOrg);

//Post new job
router.post("/postJob", postJob);

//Delete recent job
router.delete("/deleteRecentJob", deleteRecentJob);

//Edit job
router.put("/editJob/:id", editJob);

//Find job
router.post("/findJob", findJob);

module.exports = router;
