# 🎓 Student Assignment Dashboard

A fully responsive, role-based assignment management dashboard built using **React.js**, **Tailwind CSS**, and **Node.js (optional backend)**.  
This project demonstrates **frontend–backend integration, localStorage handling**, and **role-based dashboards** for managing assignments efficiently.


---

## 🚀 Live Demo

- **Frontend (Vercel):** https://student-assignment-dashboard-7iofgc1xm.vercel.app/

---

## ✨ Features

- **User Registration & Login**
  - Users can register with their name, ID, and role (Student/Teacher).
  - Registered users log in with their credentials (validated from localStorage or backend).
- **Role-Based Dashboards**
  - **Students:** View a list of assignments, submit assignment links (with double confirmation), and check completion status.
  - **Teachers (Admins):** Create assignments (title, due date, Drive link), track student submissions, and visualize progress.
- **Progress Visualization:** Teachers can view progress bars for assignment completion.
- **Double Verification:** Students confirm their assignment submission twice for accuracy.
- **Responsive UI/UX:** Fully mobile-friendly layout using Tailwind CSS.
- **Component-Based Architecture:** Every feature is a modular React component.
- **Persistent Data:** Stored in browser localStorage (for demo) or database (if backend used).

---

## 🛠️ Tech Stack

**Frontend:**
- React.js  
- Tailwind CSS  
- HTML, CSS, JavaScript  

**Backend (optional):**
- Node.js  
- Express.js  
- MySQL (for user and assignment data storage)

---

## 🏗️ Folder Structure

### 🖥️ Frontend
<pre> <code> ``` student-assignment-dashboard/
│
├── src/
│ ├── App.js
│ ├── index.js
│ ├── index.css
│ └── components/
│ ├── Login.js
│ ├── StudentDashboard.js
│ ├── TeacherDashboard.js
│ ├── AssignmentSubmitModal.js
│ ├── AssignmentCreateModal.js
│ ├── AssignmentStatusBar.js
│ └── SubmittedStudentsList.js
│
├── package.json
├── tailwind.config.js
└── postcss.config.js ``` </code> </pre>

### ⚙️ Backend
<pre> <code> ``` backend/
│
├── server.js
├── db.js
├── model.js
└── routes.js ``` </code> </pre>

---

## 🧩 Component Overview

- **Login.js:** Handles registration and login (via localStorage).
- **StudentDashboard.js:** Displays all assignments and submission status.
- **AssignmentSubmitModal.js:** Allows link submission with confirmation modals.
- **TeacherDashboard.js:** Enables teachers to create and manage assignments.
- **AssignmentCreateModal.js:** Form modal for adding new assignments.
- **AssignmentStatusBar.js:** Visual bar for progress tracking.
- **SubmittedStudentsList.js:** Displays student submission links.
- **App.js:** Main file for routing and authentication control.

---

## 💾 Data Handling

- In the **deployed version (Vercel)**, all data — including users, assignments, and submissions — is **stored in browser localStorage**.  
  This approach enables a fully functional demo without needing a live backend server.  
- The project is also **backend-ready**: when connected with **Node.js and MySQL**, it can store and retrieve data **persistently** from a real database.  
- This hybrid design supports both setups:
  - **Frontend-only deployments** (for quick hosting on Vercel)  
  - **Full-stack deployments** (for production with database integration)


---

## 🧠 Key Concepts Explored

- React component-based architecture
- Tailwind for responsive design
- LocalStorage data persistence
- Role-based rendering
- Frontend-to-backend communication (optional)

---

## 🧩 Running Locally

### Frontend
git clone https://github.com/kollamorampavani/student-assignment-dashboard.git
cd student-assignment-dashboard
npm install
npm start
Access at http://localhost:3000

### Backend (optional)
cd backend
npm install
node server.js
Backend runs on http://localhost:3001

---

## 🌍 Deployment

- **Frontend:** Hosted on Vercel — https://student-assignment-dashboard-7iofgc1xm.vercel.app/
- **Backend:** Can be deployed on Render, Railway, or any Node.js host
- **Data:** Stored locally or in MySQL based on setup

---



## 📈 Design Highlights

- Separation of Student and Teacher roles
- Double-confirm workflow to avoid errors
- Clean and scalable code organization
- Interactive UI built with reusable React components

---

## 💡 Future Enhancements

- Add backend database connectivity (MySQL) for permanent storage
- JWT-based authentication system
- Email notifications for assignment submissions
- File upload feature for assignment attachments

---

## 👩‍💻 Author

Kollamoram Pavani  
📧 Email: kollamorampavani123@gmail.com  
🌐 GitHub: https://github.com/kollamorampavani

⭐ This project was built out of interest to improve my full-stack development skills and demonstrate UI/UX, logic, and functionality integration.

---
