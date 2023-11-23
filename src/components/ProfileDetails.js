// ProfileDetails.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Profile.css';

const ProfileDetails = () => {
  const location = useLocation();
  const profileData = location.state?.profileData || {}; // Use optional chaining to handle undefined

  console.log('Profile Data:', profileData);
  
  return (
    <div>
      <section className="apply-header">
        <div className="logo">FREELANCEYOU</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </section>

      <section className="profile-details-container">
        <div className="profile-details-card">
          <img src={profileData.profileImage} alt={profileData.fullName} />
          <h2>{profileData.fullName}</h2>
          <p>Occupation: {profileData.occupation}</p>
          <p>Skills: {profileData.skills}</p>
          <p>Description: {profileData.description}</p>
          <p>Languages Known: {profileData.languagesKnown}</p>
          <p>Language Level: {profileData.languageLevel}</p>
          <Link to="/hire" className="back-btn">Back to Freelancers</Link>
        </div>
      </section>
    </div>
  );
};

export default ProfileDetails;
