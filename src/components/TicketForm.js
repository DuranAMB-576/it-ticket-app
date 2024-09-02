import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function TicketForm() {
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the description to the backend (which uses GPT)
    try {
      const response = await axios.post('/api/generate-ticket', { description });
      // Pass the generated ticket content to the review page
      navigate('/review', { state: { ticket: response.data.ticket } });
    } catch (error) {
      console.error('Error generating ticket:', error);
    }
  };

  return (
    <div className="ticket-form">
      <h1>Create IT Ticket</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your issue..."
          rows="6"
          required
        />
        <button type="submit">Generate Ticket</button>
      </form>
    </div>
  );
}

export default TicketForm;
