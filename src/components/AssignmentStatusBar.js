import React from 'react';

export default function AssignmentStatusBar({ assignment }) {
  const total = React.useMemo(() => {
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    return users.filter(u => u.role === 'student').length || 1;
  }, []);
  const submitted = (assignment.submissions || []).length;
  const percent = Math.round((submitted / total) * 100);

  return (
    <div className="mt-2">
      <div className="w-full bg-gray-200 rounded h-4">
        <div className="bg-green-500 h-4 rounded" style={{ width: `${percent}%` }} />
      </div>
      <span className="text-xs mt-1 block">{submitted} of {total} students submitted</span>
    </div>
  );
}
