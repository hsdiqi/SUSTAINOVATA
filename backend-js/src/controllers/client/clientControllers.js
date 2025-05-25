const db = require('../../config/db');

exports.getAllUsers = (req, res) => {
  db.query('SELECT * FROM user', (err, results) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(results);
  });
};



