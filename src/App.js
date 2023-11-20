import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApplyComponent from './components/ApplyComponent.js'; 
import Home from './Home';
import HireComponent from './components/HireComponent.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/hire" element={<HireComponent /> } />
        <Route path="/apply" element={<ApplyComponent />} />
        
      </Routes>
    </Router>
  );
}

export default App;
