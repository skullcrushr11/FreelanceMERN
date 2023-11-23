import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HireComponent.css';

const HireComponent = () => {
  const [freelancers, setFreelancers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [expandedFreelancerId, setExpandedFreelancerId] = useState(null);


  useEffect(() => {
    // Fetch freelancers from the server when the component mounts
    fetchFreelancers();
  }, []); // Empty dependency array means this effect runs once after the initial render

  const fetchFreelancers = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/freelancers');
      const data = await response.json();
      setFreelancers(data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching freelancers:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleExpand = (freelancerId) => {
    setExpandedFreelancerId(expandedFreelancerId === freelancerId ? null : freelancerId);
  };

  const isExpanded = (freelancerId) => {
    return expandedFreelancerId === freelancerId;
  };

  const filteredFreelancers = freelancers.filter(
    (freelancer) =>
      freelancer.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      freelancer.occupation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section className="apply-header">
        <div className="logo">FREELANCEYOU</div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </section>

      <section className="freelancer-search">
        <input
          type="text"
          id="searchInput"
          placeholder="Search by name or occupation"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </section>

      <section className="freelancer-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredFreelancers.map((freelancer) => (
            <div key={freelancer._id} className={`freelancer-card ${isExpanded(freelancer._id) ? 'expanded' : ''}`}>
              <img src={(freelancer.profileImage)} alt={freelancer.fullName} />
              <h2>{freelancer.fullName}</h2>
              <p>{freelancer.occupation}</p>
              <p>{freelancer.skills}</p>

              {isExpanded(freelancer._id) ? (
                <div>
                  <p>Email: {freelancer.email}</p>
                  <p>Description: {freelancer.description}</p>
                  <p>Languages Known: {freelancer.languagesKnown}</p>
                  <p>Language Level: {freelancer.languageLevel}</p>
                </div>
              ) : null}

<button
  onClick={() => toggleExpand(freelancer._id)}
  style={{
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '10px',
    fontSize: '14px',
  }}
>
  {isExpanded(freelancer._id) ? 'Collapse' : 'Expand'}
</button>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default HireComponent;
