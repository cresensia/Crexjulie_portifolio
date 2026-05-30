const express = require('express');
const router = express.Router();

// GET /api/status
router.get('/', (req, res) => {
  res.json({
    status: 'Online',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
