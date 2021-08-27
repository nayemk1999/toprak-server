const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  res.send("hi");
});

// update user
router.patch("/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);

  // if (req.params.id) {
  //   // const data = req.body
  //   //update password
  //   // if (req.body.password) {
  //   //   try {
  //   //     const salt = await bcrypt.genSalt(10);
  //   //     req.body.password = await bcrypt.hash(req.body.password, salt);
  //   //   } catch (err) {
  //   //     return res.status(500).json(err);
  //   //   }
  //   // }
  //   try {
  //     const user = await User.findById(
  //       req.body._id
  //       // {
  //       //   $set: { data },
  //       // },
  //       // // {
  //       // //   $set: { 
  //       // //     // email: req.body.email,
  //       // //     // mobile: req.body.mobile,
  //       // //     // city: req.body.city,
  //       // //     // country: req.body.country,
  //       // //     // profilePicture: req.body.profilePicture
  //       // //   }
  //       // // },
  //       // { new: true },
  //       // {
  //       //   upsert: true
  //       // }
  //     );
  //     // console.log(user);
  //     res.status(200).json("Account has been updated");
  //     console.log( res.status(200).json(user))
  //   } catch (err) {
  //     return res.status(500).json(err);
  //   }
  // } else {
  //   return res.status(403).json("Permission Denied");
  // }
});

module.exports = router;
