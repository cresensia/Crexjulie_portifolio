const path = require('path');
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;
const publicPath = path.join(__dirname, '../frontend');
const apiBase = 'https://crexjulie-portifolio.onrender.com';
const apiStatusEndpoint = `${apiBase}/api/status`;
const apiContactEndpoint = `${apiBase}/api/contact`;

app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));

app.use('/api/contact', contactRoutes);

app.get('/api/status', (req, res) => {
  res.json({ status: 'Online', timestamp: new Date().toISOString() });
});

app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Cresensia Julius',
    role: 'Data Scientist | Cloud Computing Learner',
    skills: [
      'Python (Advanced)',
      'JavaScript, Node.js, Express.js',
      'SQL & Database Management',
      'Cloud Deployment (AWS, Vercel, Render)',
      'Machine Learning',
    ],
    qualifications: [
      'BSc in Data Science (Ongoing)',
      'Cloud Computing Coursework',
      'Hackathon Participation & Academic Projects',
    ],
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
