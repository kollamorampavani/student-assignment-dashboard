import React, { useEffect, useState } from 'react';
import AssignmentSubmitModal from './AssignmentSubmitModal';

// Load assignments from localStorage, or fallback to defaults
function getAssignments() {
  return JSON.parse(localStorage.getItem('assignments') || '[]');
}

function updateAssignments(assignments) {
  localStorage.setItem('assignments', JSON.stringify(assignments));
}

export default function StudentDashboard({ user, logout }) {
  const [assignments, setAssignments] = useState(() => {
    const stored = getAssignments();
    if (stored.length)
      return stored;
    // Initial demo assignments if nothing in localStorage
    const initial = [
      { id: 1, title: 'Math HW', drive_link: '', due_date: '2025-11-04', submissions: [] },
      { id: 2, title: 'Science Project', drive_link: '', due_date: '2025-11-10', submissions: [] }
    ];
    updateAssignments(initial);
    return initial;
  });
  const [showModal, setShowModal] = useState(null);

  useEffect(() => { setAssignments(getAssignments()); }, []);

  const submitAssignment = (id, link) => {
    const updatedAssignments = assignments.map(asg => (
      asg.id === id
        ? { ...asg, submissions: [...(asg.submissions || []), { student_id: user.id, name: user.name, link }] }
        : asg
    ));
    setAssignments(updatedAssignments);
    updateAssignments(updatedAssignments);
    setShowModal(null);
  };

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <button onClick={logout} className="bg-gray-200 px-4 py-1 rounded text-blue-700 font-bold hover:bg-gray-300">Go Back</button>
      </header>
      <div className="space-y-4">
        {assignments.map(asg => {
          const submitted = (asg.submissions || []).some(s => s.student_id === user.id);
          return (
            <div key={asg.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
              <div>
                <div className="font-semibold">{asg.title}</div>
                <div className="text-sm text-gray-600">{asg.due_date}</div>
              </div>
              <div>
                {submitted ? (
                  <span className="text-green-600 font-bold">Completed</span>
                ) : (
                  <>
                    <span className="text-red-600 font-bold">Not Completed</span>
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded ml-2"
                      onClick={() => setShowModal(asg.id)}
                    >Submit Assignment</button>
                  </>
                )}
              </div>
              {showModal === asg.id && (
                <AssignmentSubmitModal
                  onSubmit={link => submitAssignment(asg.id, link)}
                  onCancel={() => setShowModal(null)}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
