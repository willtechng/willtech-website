const Blog = require('../models/blog');

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content required' });
  }

  const blog = await Blog.create({ title, content });
  res.status(201).json(blog);
};

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find({
    status: 'published',
    isArchived: false
  }).sort({ createdAt: -1 });

  res.json(blogs);
};

exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog || blog.isArchived) {
    return res.status(404).json({ message: 'Blog not found' });
  }

  res.json(blog);
};

exports.publishBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    { status: 'Your blog has been published successfully' },
    { new: true }
  );

  res.json(blog);
};

exports.archiveBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    { isArchived: true },
    { new: true }
  );

  res.json({ message: 'Blog archived' });
};
