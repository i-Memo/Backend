const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const passport = require("passport");
const passportSetup = require("./config/passport-setup");
const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB Connected !"))
  .catch(err => console.log(err));

app.use(express.json());
app.use("/google", require("./config/google"));
app.get("/google", passport.authenticate("google", {
    scope: ["profile"]
}));

console.log("My first Pull-request");
app.get("/", (req, res) => {
    res.redirect("/google");
});

app.listen(PORT, () => console.log(`Server at ${PORT}`));
