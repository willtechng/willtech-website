const express = require('express');
const router = express.Router();

const {
  createBlog,
  getBlogs,
  getBlogById,
  publishBlog,
  archiveBlog
} = require('../controllers/blog.controller');

const { protect, adminOnly } = require('../middleware/auth.middleware');
const validateObjectId = require('../middleware/validateObjectId');

router.post('/', protect, adminOnly, createBlog);
router.get('/', getBlogs);
router.get('/:id', validateObjectId, getBlogById);
router.patch('/:id/publish', protect, adminOnly, publishBlog);
router.patch('/:id/archive', protect, adminOnly, archiveBlog);

module.exports = router;
