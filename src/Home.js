import React from 'react';
import './Home.css'; 
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Home() {
    return (
      <div>
        <header>
          <div className="logo">FREELANCEYOU</div>
          <nav>
            <ul>
              <li><Link to="/hire">Hire a Freelancer</Link></li>
              <li><Link to="/apply">Apply as a Freelancer</Link></li>
              <li><Link to="#">About Us</Link></li>
            </ul>
          </nav>
        </header>
        
        <section className="section">
          <div className="section-content">
            <div className="section-text">
              <h2>How Hiring a Freelancer Works</h2>
              <p>Learn how our platform makes it easy to hire skilled freelancers for your projects.</p>
              <Link to="/hire">Hire a Freelancer</Link>
            </div>
            <div className="section-image">
              <img src={`${process.env.PUBLIC_URL}/images/istockphoto-1416048929-612x612.jpg`} alt="Hire a Freelancer" />
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="section-content">
            <div className="section-image">
              <img src={`${process.env.PUBLIC_URL}/images/photo-1538688423619-a81d3f23454b.avif`} alt="Apply as a Freelancer" />
            </div>
            <div className="section-text">
              <h2>How Applying as a Freelancer Works</h2>
              <p>Discover how to join our platform as a freelancer and showcase your skills.</p>
              <Link to="/apply">Apply as a Freelancer</Link>
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="section-content">
            <div className="section-text">
              <h2>Why Freelancing Matters</h2>
              <p>Explore the benefits of freelancing and how it can help both businesses and freelancers.</p>
            </div>
            <div className="section-image">
              <img src={`${process.env.PUBLIC_URL}/images/photo-1572021335469-31706a17aaef.avif`} alt="Freelancing Benefits" />
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

  export default Home;