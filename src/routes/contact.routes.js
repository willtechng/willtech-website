const express = require('express');
const router = express.Router();

const {
  createContact,
  getContacts
} = require('../controllers/contact.controller');

const { protect, adminOnly } = require('../middleware/auth.middleware');

router.post('/', createContact);
router.get('/', protect, adminOnly, getContacts);

module.exports = router;
