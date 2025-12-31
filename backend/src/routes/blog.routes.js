import express from "express";
import { createBlog, deleteBlog, getAllBlogs, getblogBySlug, updateBlog } from "../controllers/blog.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// public routes
router.get('/', getAllBlogs);
router.get('/:slug', getblogBySlug);

// protected routes
router.post('/', protect, createBlog);
router.put('/:id', protect, updateBlog);
router.delete('/:id', protect, deleteBlog);

export default router;