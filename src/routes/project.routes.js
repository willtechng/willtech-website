const express = require('express');
const router = express.Router();
const validateObjectId = require('../middleware/validateObjectId');
const { protect, adminOnly } = require('../middleware/auth.middleware');

const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  publishProject,
  archiveProject
} = require('../controllers/project.controller');

router.post('/', createProject);
router.get('/', getProjects);
router.get('/:id', getProjectById);
router.put('/:id', updateProject);
router.patch('/:id/publish', publishProject);
router.patch('/:id/archive', archiveProject);

router.get('/:id', validateObjectId, getProjectById);
router.put('/:id', validateObjectId, updateProject);
router.patch('/:id/publish', validateObjectId, publishProject);
router.patch('/:id/archive', validateObjectId, archiveProject);

router.post('/', protect, adminOnly, createProject);
router.put('/:id', protect, adminOnly, updateProject);
router.patch('/:id/publish', protect, adminOnly, publishProject);
router.patch('/:id/archive', protect, adminOnly, archiveProject);

module.exports = router;
