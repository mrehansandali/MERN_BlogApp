import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    slug: {
        type: String,
        unique: true,
    },
    content: String,
    coverImage: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    isPublished: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

export default mongoose.model("Blog", blogSchema);