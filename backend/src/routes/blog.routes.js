import express from "express";
import { createBlog, deleteBlog, getAllBlogs, getblogBySlug, updateBlog } from "../controllers/blog.controller.js";

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:slug', getblogBySlug);
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export default router;