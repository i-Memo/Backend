const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemoModel = new Schema({
    memoText: String,
    createdOn: {
        type: Date,
        default: Date.now()
    },
    isEdited: {
        type: Boolean,
        default: false
    },
    attachments: [{
        type: String
    }]
});

module.exports = Memo = mongoose.model("Memo", MemoModel);
