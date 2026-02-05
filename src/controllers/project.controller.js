const Project = require('../models/project');

exports.createProject = async (req, res) => {
  const { title, description, category, image } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      message: 'Project title and description are required'
    });
  }

  const project = await Project.create({
    title,
    description,
    category,
    image
  });
  

  res.status(201).json(project);
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find({ status: "published" })
    .sort({ createdAt: -1 });

  res.json(projects);
};

exports.getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project || project.isArchived) {
    return res.status(404).json({ message: 'Project not found' });
  }

  res.json(project);
};

exports.updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }

  res.json(project);
};

exports.publishProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    { status: 'published' },
    { new: true }
  );

  res.json(project);
};

exports.archiveProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    { isArchived: true },
    { new: true }
  );

  res.json({ message: 'Project archived', project });
};
