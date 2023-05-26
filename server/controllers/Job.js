const { Post } = require("../models");

const Job = async (req, res) => {
  const Data = req.body;

  try {
    if (Data.searchData == null) {
      const allJobs = await Post.findAll();

      res.send(allJobs);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Job };
