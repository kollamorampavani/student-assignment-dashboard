const db = require('./db');

exports.getAssignments = async (user, role) => {
  if (role === 'teacher') {
    const [rows] = await db.query(
      'SELECT * FROM assignments WHERE teacher_id = ?', [user.id]
    );
    return rows;
  } else {
    const [rows] = await db.query(`
      SELECT a.*, 
        EXISTS(SELECT 1 FROM submissions s WHERE s.assignment_id=a.id AND s.student_id=?) AS submitted 
      FROM assignments a
    `, [user.id]);
    return rows;
  }
};

exports.createAssignment = async (title, drive_link, due_date, teacher_id) => {
  const [res] = await db.query(
    'INSERT INTO assignments (title, drive_link, due_date, teacher_id) VALUES (?, ?, ?, ?)',
    [title, drive_link, due_date, teacher_id]
  );
  return { id: res.insertId };
};

exports.getProgress = async (assignment_id) => {
  const [[{ total }]] = await db.query('SELECT COUNT(*) as total FROM users WHERE role="student"');
  const [[{ submitted }]] = await db.query(
    `SELECT COUNT(*) as submitted FROM submissions WHERE assignment_id=?`,
    [assignment_id]
  );
  return { total, submitted };
};

exports.submitAssignment = async (student_id, assignment_id, link) => {
  const [already] = await db.query(
    'SELECT * FROM submissions WHERE student_id=? AND assignment_id=?',
    [student_id, assignment_id]
  );
  if (already.length > 0) return { status: 'already' };
  await db.query(
    'INSERT INTO submissions (student_id, assignment_id, status, link) VALUES (?, ?, ?, ?)',
    [student_id, assignment_id, 'submitted', link]
  );
  return { status: 'ok' };
};
