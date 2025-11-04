import React, { useState } from 'react';

// Use localStorage for user registration and login check
function getRegisteredUsers() {
  return JSON.parse(localStorage.getItem('registeredUsers') || '[]');
}
function addUser(user) {
  const users = getRegisteredUsers();
  users.push(user);
  localStorage.setItem('registeredUsers', JSON.stringify(users));
}
function findUser({ id, name, role }) {
  return getRegisteredUsers().find(u => u.id === id && u.name === name && u.role === role);
}

export default function Login({ setUser }) {
  const [tab, setTab] = useState('login');
  const [role, setRole] = useState('student');
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [msg, setMsg] = useState('');

  const handleRegister = e => {
    e.preventDefault();
    setMsg('');
    if (findUser({ id, name, role })) {
      setMsg('User already registered. Please log in.');
      return;
    }
    addUser({ id, name, role });
    setMsg('Registered successfully! Please log in.');
    setTab('login');
    setName('');
    setId('');
  };

  const handleLogin = e => {
    e.preventDefault();
    setMsg('');
    const user = findUser({ id, name, role });
    if (!user) {
      setMsg('User not found or wrong credentials. Please register.');
      return;
    }
    setUser(user);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-80">
        <div className="flex mb-6 justify-between">
          <button
            className={`${tab === 'login' ? 'border-b-2 border-blue-600 font-bold' : 'text-gray-500'} px-2`}
            onClick={() => setTab('login')}
          >Login</button>
          <button
            className={`${tab === 'register' ? 'border-b-2 border-blue-600 font-bold' : 'text-gray-500'} px-2`}
            onClick={() => setTab('register')}
          >Register</button>
        </div>
        <form onSubmit={tab === 'login' ? handleLogin : handleRegister} className="space-y-4">
          <select
            className="border px-3 py-2 w-full rounded"
            value={role}
            onChange={e => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          <input
            type="text"
            placeholder="Name"
            className="border px-3 py-2 w-full rounded"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder={`${role === 'student' ? 'Student' : 'Teacher'} ID`}
            className="border px-3 py-2 w-full rounded"
            value={id}
            onChange={e => setId(e.target.value)}
            required
          />
          {msg && <div className="text-sm text-red-600">{msg}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded font-semibold"
          >
            {tab === 'login' ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}
