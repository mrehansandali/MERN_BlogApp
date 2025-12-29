import Blog from "../models/Blog.js";

// get all blog 
export const getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        next(error)        
    }
}

// create blog
export const createBlog = async (req, res, next) => {
    try {
        const { title, content } = req?.body;

        if(!title || !content) {
            res.status(400)
            throw new Error('Title and content are reuired !')
        }

        const blog = await Blog.create({
            title,
            content,
        })

        res.status(200).json(blog);
    } catch (error) {
        next(error);
    };
};