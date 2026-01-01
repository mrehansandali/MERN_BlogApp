import mongoose from "mongoose";

const comment = new mongoose.Schema({
    text: String,
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BlogAppUser"
    },
}, { timestamps: true });

export default mongoose.model("Comment", comment);