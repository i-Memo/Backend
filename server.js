const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const passport = require("passport");
const passportSetup = require("./config/passport-setup");

app.use(express.json());
app.use("/google", require("./config/google"));
app.get("/google", passport.authenticate("google", {
    scope: ["profile"]
}));

app.get("/", (req, res) => {
    res.redirect("/google");
});

app.listen(PORT, () => console.log(`Server at ${PORT}`));
