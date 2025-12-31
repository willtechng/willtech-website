const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerAdmin = async (req, res) => {
  const { email, password } = req.body;

  const exists = await Admin.findOne({ email });
  if (exists) return res.status(400).json({ message: 'Admin already exist' });

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await Admin.create({
    email,
    password: hashedPassword
  });

  res.status(201).json({ message: 'Admin created successfully' });
};

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(401).json({ message: 'Invalid details' });

  const match = await bcrypt.compare(password, admin.password);
  if (!match) return res.status(401).json({ message: 'Invalid details' });

  const token = jwt.sign(
    { id: admin._id, role: admin.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.json({ token });
};
