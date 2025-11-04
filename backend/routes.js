const express = require('express');
const router = express.Router();
const models = require('./models');
const db = require('./db');

// REGISTER endpoint (new)
router.post('/api/users/register', async (req, res) => {
  const { id, name, role } = req.body;
  // Check if exists
  const [rows] = await db.query('SELECT * FROM users WHERE u_id = ?', [id]);
  if (rows.length > 0)
    return res.json({ error: 'User with that ID already exists. Please try another ID or login.' });
  await db.query(
    'INSERT INTO users (name, role, u_id) VALUES (?, ?, ?)',
    [name, role, id]
  );
  return res.json({ success: true });
});

// LOGIN endpoint: Only allows login if user exists with correct credentials
router.post('/api/users/login', async (req, res) => {
  const { id, name, role } = req.body;
  const [rows] = await db.query(
    'SELECT * FROM users WHERE u_id = ? AND name = ? AND role = ?',
    [id, name, role]
  );
  if (rows.length === 0) return res.json({ error: 'Invalid credentials' });
  res.json(rows[0]);
});

router.post('/api/assignments/list', async (req, res) => {
  const { user, role } = req.body;
  const assigns = await models.getAssignments(user, role);
  res.json(assigns);
});

router.post('/api/assignments/create', async (req, res) => {
  const { title, drive_link, due_date, teacher_id } = req.body;
  const assignment = await models.createAssignment(title, drive_link, due_date, teacher_id);
  res.json(assignment);
});

router.get('/api/assignments/progress/:id', async (req, res) => {
  const prog = await models.getProgress(req.params.id);
  res.json(prog);
});

router.get('/api/assignments/submitted/:assignmentId', async (req, res) => {
  const assignmentId = req.params.assignmentId;
  const [rows] = await db.query(`
    SELECT u.name, u.u_id
    FROM submissions s
    JOIN users u ON u.id = s.student_id
    WHERE s.assignment_id = ?
  `, [assignmentId]);
  res.json(rows);
});

router.post('/api/submissions/submit', async (req, res) => {
  const { student_id, assignment_id, link } = req.body;
  const status = await models.submitAssignment(student_id, assignment_id, link);
  res.json(status);
});

module.exports = router;
