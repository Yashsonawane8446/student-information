import React from "react";
import "./StudentCard.css";

function StudentCard({ name, email, city, avatar }) {
  return (
    <div className="student-card">
      <div className="info">
        <h3>{name}</h3>
        <p>📧 {email}</p>
        <p>🏙️ {city}</p>
      </div>
      <img src={avatar} alt={name} className="avatar" />
    </div>
  );
}

export default StudentCard;
