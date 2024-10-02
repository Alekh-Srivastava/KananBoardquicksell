// Card.jsx
import React from 'react';
import './Card.css'; // Import the CSS file

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <div className="card-id">{ticket.id}</div>
      <div className="card-title">{ticket.title}</div>
      <div className="card-tag">
        {ticket.tag.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <div className="card-status">
        <strong>Status:</strong> {ticket.status}
      </div>
      <div className="card-priority">
        <strong>Priority:</strong> {ticket.priority}
      </div>
    </div>
  );
};

export default Card;
