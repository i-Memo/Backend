const express = require("express");
const router = express.Router();
const Memo = require("../Models/Memo.js");

router.get("/showAllMemos", async (req, res) => {
    const Memos = await Memo.find({});

    return res.json({scs: true, Memos});
});

router.post("/createMemo", async (req, res) => {
    try {
    const newMemo = new Memo({
        memoText,
        createdBy: user,
    });

    newMemo.save();
    return res.json({scs: true, message: "Memo Created!"});

    } catch (er) {
        return res.json({scs: false, message: "Error Occured!"});
    }
});

router.get("/getUserMemos", async (req, res) => {
    const {user} = req.body;
    const userMemos = await Memo.find({createdBy: user});

    return res.json({scs: true, userMemos});
});

router.post("/deleteMemo", (req, res) => {});

router.post("/updateMemo", (req, res) => {});

module.exports = router;
