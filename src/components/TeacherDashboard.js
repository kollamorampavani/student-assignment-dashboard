import React, { useState, useEffect } from 'react';
import AssignmentCreateModal from './AssignmentCreateModal';
import AssignmentStatusBar from './AssignmentStatusBar';
import SubmittedStudentsList from './SubmittedStudentsList';

function getAssignments() {
  return JSON.parse(localStorage.getItem('assignments') || '[]');
}
function updateAssignments(assignments) {
  localStorage.setItem('assignments', JSON.stringify(assignments));
}

export default function TeacherDashboard({ user, logout }) {
  const [assignments, setAssignments] = useState(getAssignments());
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setAssignments(getAssignments());
  }, []);

  const addAssignment = (newAssignment) => {
    const id = Date.now();
    const teacher_id = user.id;
    const updated = [
      { ...newAssignment, id, teacher_id, submissions: [] },
      ...assignments
    ];
    setAssignments(updated);
    updateAssignments(updated);
    setShowModal(false);
  };

  // ✅ Show only assignments created by logged-in teacher
  const teacherAssignments = assignments.filter(asg => asg.teacher_id === user.id);

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
        <button onClick={logout} className="bg-gray-200 px-4 py-1 rounded text-blue-700 font-bold hover:bg-gray-300">Go Back</button>
      </header>
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded mb-4"
        onClick={() => setShowModal(true)}
      >Create Assignment</button>
      {teacherAssignments.length === 0 ? (
        <div className="text-gray-500 italic">No assignments yet.</div>
      ) : (
        teacherAssignments.map(asg => (
          <div key={asg.id} className="bg-white p-4 mb-4 rounded shadow">
            <div className="font-semibold">{asg.title}</div>
            {asg.drive_link && (
              <a href={asg.drive_link} className="text-blue-500 underline" target="_blank" rel="noreferrer">Drive Link</a>
            )}
            <div className="my-1 text-sm text-gray-600">{asg.due_date}</div>
            <AssignmentStatusBar assignment={asg} />
            <SubmittedStudentsList assignment={asg} />
          </div>
        ))
      )}
      {showModal && (
        <AssignmentCreateModal
          onCreate={addAssignment}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
