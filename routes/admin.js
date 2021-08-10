const router = require("express").Router();
const Admin = require("../models/Admin");


router.post("/add-admin", async (req, res) => {
  const newEmail = req.body.email
    const newAddedAdmin = {
        email: newEmail
    }
  try {
    // Create new Admin
    const newAdmin = await new Admin(newAddedAdmin);
    //   save and return response
    const admin = await newAdmin.save();
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/all-admin", async (req, res) => {
  try {
    Admin.find({})
      .then((result) => {
        res.send(result)
      })
  } catch (err) {
    console.log(error)
    res.status(500).json(err);
  }
});
router.post("/is-admin", async (req, res) => {
    const email = req.body.email
  try {
    Admin.findOne({email: email})
      .then((result) => {
        res.send(result)
      })
  } catch (err) {
    console.log(error)
    res.status(500).json(err);
  }
});

module.exports = router;