// KanbanBoard.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Column from './Column';
import './Kanban.css'; // Import the CSS file

const KanbanBoard = () => {
  const tickets = useSelector((state) => state.set.data);
  const grouping = useSelector((state) => state.set.grouping);
  const ordering = useSelector((state) => state.set.ordering);

  console.log("tickets", tickets, grouping, ordering); // Corrected variable name
  if (Object.keys(tickets).length === 0) return <>no data fetched</>;

  const ticketList = tickets.tickets;
  // Group tickets based on selected grouping (status, user, priority)
  const groupedTickets = ticketList.reduce((acc, ticket) => {
    const key = ticket[grouping] || 'Unassigned'; // Default to 'Unassigned' if grouping is not defined
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc; 
  }, {});   

  // Sort tickets in each group based on selected ordering (priority, title)
  const sortedGroupedTickets = {};
  for (const key in groupedTickets) {
    sortedGroupedTickets[key] = groupedTickets[key].sort((a, b) => {
      if (ordering === 'priority') return b.priority - a.priority;
      return a.title.localeCompare(b.title);
    });
  }

  return (
    <div className="kanban-board">
      {Object.entries(sortedGroupedTickets).map(([key, tickets]) => (
        <Column key={key} title={key} tickets={tickets} />
      ))}
    </div>
  );
};

export default KanbanBoard;
