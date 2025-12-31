const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./src/config/db');
const errorHandler = require('./src/middleware/error.middleware');

const authRoutes = require('./src/routes/auth.routes');
const projectRoutes = require('./src/routes/project.routes');
const blogRoutes = require('./src/routes/blog.routes');
const contactRoutes = require('./src/routes/contact.routes');



const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'willTech-website API running' });
});

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
