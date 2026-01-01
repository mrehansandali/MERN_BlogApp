import express from "express";
import { createBlog, deleteBlog, getAllBlogs, getblogBySlug, searchBlogs, updateBlog } from "../controllers/blog.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// public routes
router.get('/', getAllBlogs);
router.get('/:slug', getblogBySlug);
router.post('/search',searchBlogs);

// protected routes + role based access
router.post('/', protect, authorize("admin", "author"), createBlog);
router.put('/:id', protect, authorize("admin", "author"), updateBlog);
router.delete('/:id', protect, authorize("admin"), deleteBlog);

export default router;