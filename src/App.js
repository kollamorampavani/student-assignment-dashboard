import React, { useState } from 'react';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';

// All state is local, but could use localStorage for persistence. See Login.js.

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login setUser={setUser} />;
  if (user.role === 'student') return <StudentDashboard user={user} logout={() => setUser(null)} />;
  if (user.role === 'teacher') return <TeacherDashboard user={user} logout={() => setUser(null)} />;
  return null;
}
