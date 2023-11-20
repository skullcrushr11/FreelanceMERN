import React from 'react';
import './ApplyComponent.css';
import { Link } from 'react-router-dom';
function ApplyComponent() {
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
      <section className="uppersec">
        <h1>Apply as a Freelancer</h1>
        <p>Complete the form below to apply as a freelancer:</p>
      </section>
      <form action="process_application.php" method="post" enctype="multipart/form-data">
      <section class="section">
            <div class="section-content">
                <div class="section-text">
                    <label for="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required/>
                </div>
                <div class="section-text">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="section-content">
                <div class="section-text">
                    <label for="occupation">Your Occupation:</label>
                    <select id="occupation" name="occupation">
                        <option>Doctor</option>
                        <option>Educator</option>
                        <option>Business</option>
                    </select>
                </div>
                <div class="section-text">
                    <label for="skills">Skills:</label>
                    <textarea id="skills" name="skills" required></textarea>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="section-content">
                <div class="section-text">
                    <label for="profileImage">Profile Picture:</label>
                    <input type="file" id="profileImage" name="profileImage" accept="image/*"/>
                    <img
                    id="previewImage"
                    src="#"
                    alt="Preview"
                    style={{
                        display: 'none',
                        borderRadius: '50%',
                        maxWidth: '100px',
                        maxHeight: '100px',
                    }}
                    />
                </div>
                <div class="section-text">
                    <label for="description">Description:</label>
                    <textarea id="description" name="description"></textarea>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="section-content">
                <div class="section-text">
                    <label for="languagesKnown">Languages Known:</label>
                    <select id="languagesKnown" name="languagesKnown">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        
                    </select>
                </div>
                <div class="section-text">
                    <label for="languageLevel">Language Level:</label>
                    <select id="languageLevel" name="languageLevel">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Expert</option>
                    </select>
                </div>
                <div class="section-text">
                    <button type="button" id="addLanguage">Add</button>
                </div>
            </div>
            <div id="selectedLanguages">
                <ul></ul>
            </div>
        </section>
        <section class="submitsec">
        <div class="form-container">
        <button type="submit" className="submitbutton">Submit</button>
        </div>
    </section>
      </form>
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

export default ApplyComponent;
