import React from 'react';
import './Profile.css';
import { Link, useLocation } from 'react-router-dom';

function Profile() {
  const { state } = useLocation();
  const { profileData } = state || {};

  // If profileData is undefined, you can display a loading state or handle it accordingly
  if (!profileData) {
    return <p>Loading...</p>; // You can customize this loading state
  }

  const {
    fullName,
    email,
    occupation,
    skills,
    profileImage,
    description,
    languagesKnown,
    languageLevel,
  } = profileData;

  return (
    <div>
      <header>
        <div className="logo">FREELANCEYOU</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/apply">Apply as a Freelancer</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>
      </header>
      <section className="profile-section">
        <div className="profile-header">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <h1>{fullName}</h1>
          <p>{occupation}</p>
        </div>
        <div className="profile-details">
          <div>
            <h2>Contact Information</h2>
            <p>Email: {email}</p>
          </div>
          <div>
            <h2>Skills</h2>
            <p>{skills}</p>
          </div>
          <div>
            <h2>Description</h2>
            <p>{description}</p>
          </div>
          <div>
            <h2>Languages</h2>
            <ul>
              {languagesKnown.map((language, index) => (
                <li key={index}>
                  {language} - {languageLevel[index]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <div className="copyright">© 2023 FREELANCEYOU</div>
        <div className="links">
          <a href="#">About Us</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}

export default Profile;
