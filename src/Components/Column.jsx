// Column.jsx
import React from 'react';
import Card from './Card';

const Column = ({ title, tickets }) => {
  return (
    <div className="column">
      <h2 className="column-title">{title}</h2>
      <div className="ticket-list">
        {tickets.map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Column;
