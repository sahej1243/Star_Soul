import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './screens/LandingPage';
import { StarDate } from './screens/StarDate';
import { SpaceChat } from './screens/SpaceChat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/star-date" element={<StarDate />} />
        <Route path="/space-chat" element={<SpaceChat />} />
      </Routes>
    </Router>
  );
}

export default App;