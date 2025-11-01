import React, { useState } from 'react';

export default function AssignmentCreateModal({ onCreate, onCancel }) {
  const [title, setTitle] = useState('');
  const [drive_link, setDriveLink] = useState('');
  const [due_date, setDueDate] = useState('');

  const handleCreate = () => {
    if (!title || !due_date) {
      alert('Title and due date required');
      return;
    }
    onCreate({ title, drive_link, due_date });
    setTitle('');
    setDriveLink('');
    setDueDate('');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-xs">
        <h2 className="font-semibold text-lg mb-4">Create Assignment</h2>
        <input
          className="mb-2 w-full border rounded px-2 py-1"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          className="mb-2 w-full border rounded px-2 py-1"
          placeholder="Google Drive Link"
          value={drive_link}
          onChange={e => setDriveLink(e.target.value)}
        />
        <input
          className="mb-2 w-full border rounded px-2 py-1"
          placeholder="Due Date (e.g., 2025-11-05)"
          type="date"
          value={due_date}
          onChange={e => setDueDate(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button onClick={onCancel} className="px-3 py-1 border rounded">Cancel</button>
          <button onClick={handleCreate} className="px-3 py-1 bg-indigo-600 text-white rounded">Create</button>
        </div>
      </div>
    </div>
  );
}
