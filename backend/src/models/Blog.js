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
        ref: "BlogAppUser",
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "BlogAppUser",
    }],
    isPublished: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

export default mongoose.model("Blog", blogSchema);