import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TicketReview() {
  const location = useLocation();
  const navigate = useNavigate();
  const { ticket } = location.state || {};

  const handleSubmission = async () => {
    try {
      await axios.post('/api/submit-ticket', { ticket });
      navigate('/submit');
    } catch (error) {
      console.error('Error submitting ticket:', error);
    }
  };

  if (!ticket) {
    return <div>No ticket to review.</div>;
  }

  return (
    <div className="ticket-review">
      <h1>Review Your Ticket</h1>
      <div className="ticket-content">
        <p>{ticket}</p>
      </div>
      <button onClick={handleSubmission}>Submit Ticket</button>
    </div>
  );
}

export default TicketReview;
