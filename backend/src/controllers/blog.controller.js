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

        await blog?.deleteOne();

        res.status(200).json({ message: 'Blog Deleted Successfully!'});
    } catch (error) {
        next(error);
    };
};