import React from "react";
import "./App.css";
import StudentCard from "./components/StudentCard";

const students = [
  { name: "Aarav", email: "aaravpatil01@gmail.com", city: "Pune", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aarav" },
  { name: "Isha", email: "ishasharma02@gmail.com", city: "Delhi", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Isha" },
  { name: "Rohan", email: "rohanmehta03@gmail.com", city: "Nagpur", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Rohan" },
  { name: "Priya", email: "priyasingh04@gmail.com", city: "Surat", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Priya" },
  { name: "Kabir", email: "kabirkhan05@gmail.com", city: "Hyderabad", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Kabir" },
  { name: "Sneha", email: "snehaverma06@gmail.com", city: "Kolkata", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sneha" },
  { name: "Vikram", email: "vikramjadhav07@gmail.com", city: "Ahmedabad", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Vikram" },
];

function App() {
  return (
    <div className="app">
      <h1>Student Dashboard</h1>
      <p className="subtitle">A system to handle student data and profiles.</p>
      <div className="card-container">
        {students.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </div>
    </div>
  );
}

export default App;
