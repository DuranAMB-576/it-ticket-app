import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicketForm from './components/TicketForm';
import TicketReview from './components/TicketReview';
import TicketSubmit from './components/TicketSubmit';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TicketForm />} />
          <Route path="/review" element={<TicketReview />} />
          <Route path="/submit" element={<TicketSubmit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
