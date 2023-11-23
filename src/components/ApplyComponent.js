import React, { useState } from 'react';
import './ApplyComponent.css';
import { Link } from 'react-router-dom';

function ApplyComponent() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    occupation: 'Doctor',
    skills: '',
    profileImage: null,
    description: '',
    languagesKnown: 'English',
    languageLevel: 'Beginner',
    numberOfLanguages: 1, // New state for the number of languages
    languages: [{ name: '', level: '' }], // New state for language information
  });

  const spokenLanguages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Mandarin Chinese',
    'Hindi',
    'Arabic',
    'Portuguese',
    'Bengali',
    'Russian',
    'Japanese',
    'Punjabi',
    'Telugu',
    'Marathi',
    'Tamil',
    'Urdu',
    'Turkish',
    'Italian',
    'Thai',
    'Dutch',
    'Swedish',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });
    const previewImage = document.getElementById('previewImage');
    previewImage.style.display = 'block';
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleAddLanguage = () => {
    // Handle adding languages if needed
  };

  const handleLanguageNumberChange = (e) => {
    const numberOfLanguages = parseInt(e.target.value, 10);
    setFormData({
      ...formData,
      numberOfLanguages,
      languages: Array.from({ length: numberOfLanguages }, () => ({ name: '', level: '' })),
    });
  };

  const handleLanguageInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedLanguages = [...formData.languages];
    updatedLanguages[index][name] = value;
    setFormData({ ...formData, languages: updatedLanguages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:3001/api/freelancers', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        console.log('Application submitted successfully!');
      } else {
        console.error('Error submitting application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

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
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <section className="section">
          <div className="section-content">
            <div className="section-text">
              <label htmlFor="fullName">Full Name:</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
            </div>
            <div className="section-text">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-content">
            <div className="section-text">
              <label htmlFor="occupation">Your Occupation:</label>
              <select id="occupation" name="occupation" value={formData.occupation} onChange={handleInputChange}>
                <option>Doctor</option>
                <option>Educator</option>
                <option>Business</option>
              </select>
            </div>
            <div className="section-text">
              <label htmlFor="skills">Skills:</label>
              <textarea id="skills" name="skills" value={formData.skills} onChange={handleInputChange} required></textarea>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-content">
            <div className="section-text">
              <label htmlFor="profileImage">Profile Picture:</label>
              <input type="file" id="profileImage" name="profileImage" accept="image/*" onChange={handleFileChange} />
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
            <div className="section-text">
              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleInputChange}></textarea>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-content">
            <div className="section-text">
              <label htmlFor="numberOfLanguages">Number of Languages Known:</label>
              <input
                type="number"
                id="numberOfLanguages"
                name="numberOfLanguages"
                value={formData.numberOfLanguages}
                onChange={handleLanguageNumberChange}
                min="1"
                max="10" // You can adjust the maximum number of languages as needed
                required
              />
            </div>
          </div>
        </section>
        <section className="section">
  <div className="section-content">
    {formData.languages.map((language, index) => (
      <div key={index} className="section-text">
        <label htmlFor={`languageName${index}`}>Language {index + 1}:</label>
        <select
          id={`languageName${index}`}
          name={`languageName${index}`}
          value={language.name}
          onChange={(e) => handleLanguageInputChange(e, index)}
          required
        >
          <option value="" disabled>Select a language</option>
          {spokenLanguages.map((spokenLanguage, languageIndex) => (
            <option key={languageIndex} value={spokenLanguage}>
              {spokenLanguage}
            </option>
          ))}
        </select>
        <label htmlFor={`languageLevel${index}`}>Level:</label>
        <select
          id={`languageLevel${index}`}
          name={`languageLevel${index}`}
          value={language.level}
          onChange={(e) => handleLanguageInputChange(e, index)}
          required
        >
          <option value="" disabled>Select a level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
      </div>
    ))}
  </div>
</section>

        <section className="submitsec">
          <div className="form-container">
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
