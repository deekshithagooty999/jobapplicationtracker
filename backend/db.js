// server/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // your MySQL username
  password: 'T#9758@qlph',        // your MySQL password
  database: 'job_tracker'  // your DB name
});

db.connect((err) => {
  if (err) {
    console.log('DB Connection Failed:', err.message);
  } else {
    console.log('Connected to MySQL Database');
  }
});

module.exports = db;
