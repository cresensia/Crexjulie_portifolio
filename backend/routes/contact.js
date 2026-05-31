const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const messagesFile = path.join(__dirname, '../messages.txt');

function saveMessage(messageData) {
  const entry = [
    '---',
    `Timestamp: ${new Date().toISOString()}`,
    `Name: ${messageData.name}`,
    `Email: ${messageData.email}`,
    `Message: ${messageData.message}`,
    ''
  ].join('\n');

  fs.appendFileSync(messagesFile, `${entry}\n`, 'utf8');
}

// POST /api/contact
router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    saveMessage({ name, email, message });
    return res.json({ message: `Thank you ${name}, your message has been received!` });
  } catch (error) {
    console.error('Unable to save contact message:', error);
    return res.status(500).json({ message: 'Unable to process your message at this time.' });
  }
});

module.exports = router;
