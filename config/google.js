const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/redirect", passport.authenticate("google"), (req, res) => {
    // Do something after using the profile info.
    return res.json({msg: "Hit the callback URL!"});
});

module.exports = router;

