// server/routes/jobs.js
const express = require('express');
const db = require('../db');

const router = express.Router();

// Add a new job
router.post('/', (req, res) => {
  const { userId, company, position, status, appliedDate } = req.body;

  if (!userId || !company || !position || !status || !appliedDate) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const query = `INSERT INTO jobs (user_id, company, position, status, applied_date)
                 VALUES (?, ?, ?, ?, ?)`;

  db.query(query, [userId, company, position, status, appliedDate], (err, result) => {
    if (err) return res.status(500).json({ message: 'Failed to add job' });
    return res.json({ message: 'Job added successfully' });
  });
});

// Get all jobs for a user
router.get('/', (req, res) => {
  const { userId } = req.query;

  if (!userId) return res.status(400).json({ message: 'Missing userId' });

  db.query('SELECT * FROM jobs WHERE user_id = ?', [userId], (err, result) => {
    if (err) return res.status(500).json({ message: 'Failed to fetch jobs' });
    return res.json(result);
  });
});

module.exports = router;
