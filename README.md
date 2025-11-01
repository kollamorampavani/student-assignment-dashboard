# Student Assignment Dashboard – Joineazy Internship Task 1

A fully responsive, role-based assignment management dashboard built using React.js and Tailwind CSS.  
All data is simulated client-side using browser localStorage.  
This project fulfills Task 1: Assignment & Review Dashboard requirements for Joineazy.

---

## 🚀 Live Demo

- **Vercel Demo:** https://student-assignment-dashboard-7iofgc1xm.vercel.app/


## ✨ Features

- **User Registration & Login**
    - Users register with their name, ID, and role (student/teacher).
    - Registered users log in with their credentials (checked against localStorage).
- **Role-Based Dashboards**
    - **Students:** View a list of all assignments, submit assignment links (with double-modal confirmation), and see completion status.
    - **Teachers (Admins):** Create assignments (title, due date, Drive link), view progress bar for each assignment (student submissions), and see a list of submitted students with links.
- **Progress Visualization:** Teachers see a visual bar for assignment uptake.
- **Double Verification:** Students confirm their assignment submission twice for accuracy.
- **Responsive UI/UX:** Mobile-first, adapts across devices, clean Tailwind styling.
- **Component-Based Architecture:** Each major function is a React component for readability and maintenance.
- **Persistent Data:** User, assignment, and submission data stored via browser localStorage.

---

## 🛠️ Stack / Technologies

- **React.js**
- **Tailwind CSS**
- **HTML, CSS**
- **No backend required!** (Simulated data only)

---

## 🏗️ Folder Structure


student-assignment-dashboard/
src/
App.js
index.js
index.css
components/
Login.js
StudentDashboard.js
TeacherDashboard.js
AssignmentSubmitModal.js
AssignmentCreateModal.js
AssignmentStatusBar.js
SubmittedStudentsList.js
package.json
tailwind.config.js
postcss.config.js


---

## 🧩 Component Overview

- **Login.js**: Handles user registration and login; interacts with localStorage.
- **StudentDashboard.js**: Displays assignments, submission status, and entry modal for assignment link submission.
- **AssignmentSubmitModal.js**: Double-confirmation modal for submitting assignment links.
- **TeacherDashboard.js**: Allows creation/viewing of assignments, shows student progress and submissions.
- **AssignmentCreateModal.js**: Modal for posting new assignments.
- **AssignmentStatusBar.js**: Shows visual progress bar for student submissions.
- **SubmittedStudentsList.js**: Lists students who have submitted with clickable links.
- **App.js**: Handles top-level role-based routing.

---

## 💾 How Data Is Simulated

- **Users, assignments, submissions** are saved and loaded from browser localStorage.
- No real backend or server required.

---

## 📱 Running Locally

1. **Clone repository:**
git clone https://github.com/kollamorampavani/student-assignment-dashboard.git
cd student-assignment-dashboard


2. **Install dependencies:**
npm install


3. **Start the app:**
npm start

Then visit [http://localhost:3000](http://localhost:3000).

---

## 🌍 Hosting/Production

- Fully deployable to Vercel as a static site.
- Data stored per browser session via localStorage (no backend required).

---



## 📈 Design Decisions

- **No backend:** Simulates all logic/data in local browser environment for rapid demo and review.
- **Separation of concerns:** Teachers and students only access their own features/data.
- **Double-confirm workflow:** Modal confirmation prevents accidental submissions.
- **Progress indicators:** Give instant feedback on assignment completion.
- **Component-based React:** Easy to maintain and expand.

---

## 📝 Submission

- **GitHub repo:** https://github.com/kollamorampavani/student-assignment-dashboard
- **Demo video:** [https://drive.google.com/file/d/18aG_tk3H5w4PTONZWJgxUyYTqAS_M_aw/view?usp=sharing]

---

## 🙌 Credits

Built for Joineazy – Frontend Intern Task (Assignment & Review Dashboard) by Kollamoram Pavani.

---

## 💡 Contact

For questions, email kollamorampavani123@gmail.com

---

Thank you – ready for demo/interview!
