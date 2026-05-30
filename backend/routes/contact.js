const express = require('express');
const router = express.Router();

// POST /api/contact
router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // In a real app, you’d save to a database or send an email here
  res.json({ message: `Thank you ${name}, your message has been received!` });
});

module.exports = router;
