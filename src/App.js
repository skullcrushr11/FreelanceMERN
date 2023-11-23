// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApplyComponent from './components/ApplyComponent.js';
import Home from './Home';
import HireComponent from './components/HireComponent.js';
import ProfileDetails from './components/ProfileDetails.js'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire" element={<HireComponent />} />
        <Route path="/apply" element={<ApplyComponent />} />
        {/* Pass the freelancers array as a prop to ProfileDetails */}
        <Route path="/profile/:fullName" element={<ProfileDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
