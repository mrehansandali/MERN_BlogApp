import Blog from "../models/Blog.js";
import slugify from "slugify";
import { checkOwnership } from "../utils/checkOwnership.js";

// get all blog 
export const getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        next(error)        
    }
}

// get blog by slug
export const getblogBySlug = async (req, res, next) => {
    try {
        const { slug } = req.params;

        const blog = await Blog.findOne({ slug });

        if(!blog) {
            res.status(404);
            throw new Error('Blog not found!');
        }

        res.status(200).json(blog);
    } catch (error) {
        next(error);
    };
};

// create blog
export const createBlog = async (req, res, next) => {
    try {
        const { title, content } = req?.body;

        if(!title || !content) {
            res.status(400)
            throw new Error('Title and content are reuired !');
        }

        const slug = slugify(title, { lower: true, strict: true });

        const blog = await Blog.create({
            title,
            content,
            slug,
            author: req.user._id,
        })

        res.status(201).json(blog);
    } catch (error) {
        next(error);
    };
};

// update blog
export const updateBlog = async (req, res, next) => {
    try {
        const { id } = req?.params;
        const { title, content } = req?.body;

        const blog = await Blog.findById(id);

        if(!blog) {
            res.status(404);
            throw new Error('Blog not found!');
        }

        // ownership check
        if(!checkOwnership(blog.author, req.user)) {
            res.status(403);
            throw new Error('You are not allowed to update this blog!');
        };

        blog.title = title || blog?.title;
        blog.content = content || blog?.content;

        const updatedBlog = await blog.save();

        res.status(200).json(updatedBlog);
    } catch (error) {
        next(error);
    };
};

// delete blog;

export const deleteBlog = async (req, res, next) => {
    try {
        const { id } = req?.params;

        const blog = await Blog.findById(id);

        if(!blog) {
            res.status(404);
            throw new Error('Blog not found!');
        };

        // ownership check
        if(!checkOwnership(blog.author, req.user)) {
            res.status(403);
            throw new Error('You are not allowed to delete this blog!');
        };

        await blog?.deleteOne();

        res.status(200).json({ message: 'Blog Deleted Successfully!'});
    } catch (error) {
        next(error);
    };
};