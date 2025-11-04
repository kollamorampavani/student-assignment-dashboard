import React, { useState } from 'react';

export default function AssignmentSubmitModal({ onSubmit, onCancel }) {
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  const handleConfirm = () => {
    if (!link.trim()) {
      setError('Please paste your assignment link.');
      return;
    }
    onSubmit(link);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded p-6 shadow w-full max-w-sm">
        <h2 className="font-semibold text-lg mb-4">Submit Assignment</h2>
        <label className="block mb-2 font-medium">Assignment Link (Google Drive, etc):</label>
        <input
          type="url"
          value={link}
          onChange={e => { setLink(e.target.value); setError(''); }}
          placeholder="https://..."
          className="w-full border px-2 py-1 mb-2 rounded"
        />
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
        <div className="flex justify-end space-x-3 mt-4">
          <button onClick={onCancel} className="border px-4 py-2 rounded">Cancel</button>
          <button onClick={handleConfirm} className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </div>
    </div>
  );
}
