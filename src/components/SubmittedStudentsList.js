import React from 'react';

// Get the names from assignment.submissions
export default function SubmittedStudentsList({ assignment }) {
  const submitted = assignment.submissions || [];
  if (!submitted.length)
    return <div className="text-xs text-gray-500">No submissions yet.</div>;

  return (
    <div className="mt-2">
      <span className="font-medium text-sm">Submitted by:</span>
      <ul className="list-disc ml-5 text-sm">
        {submitted.map(s => (
          <li key={s.student_id}>
            {s.name}
            {s.link && (
              <span>
                {' '}
                (<a href={s.link} className="text-blue-500 underline" target="_blank" rel="noreferrer">link</a>)
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
