const router = require('express').Router();
const { Intro, About, Project } = require("../backend/portfoliomodel");

// Get portfolio data
router.get("/portfolio-data", async (req, res) => {
  try {
    const Intros = await Intro.find();
    const Abouts = await About.find();
    const Projects = await Project.find();

    res.status(200).send({
      intro: Intros[0] || null,
      about: Abouts[0] || null,
      project: Projects || [],
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Server Error", error });
  }
});

// Update intro
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body.id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      data : intro,
      success: true,
      message: "Intro updated successfully",
    });
  }catch (error){
    res.status(500).send(error);
  }

});
module.exports = router;