import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './Component/Card';

// Define your routes in this component
function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        
      </Routes>
    </Router>
  );
}

export default RoutesComponent;
