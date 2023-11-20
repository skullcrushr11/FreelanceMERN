// HireComponent.js

import React, { useEffect, useState } from 'react';
import './HireComponent.css';

const HireComponent = () => {
  // Sample hardcoded freelancer data
  const [freelancers, setFreelancers] = useState([
    {
        fullName: "John Doe",
        occupation: "Developer",
        skills: "HTML, CSS, JavaScript",
        profileImage: "https://source.unsplash.com/random/200x200?sig=incrementingIdentifier",
        description: "Experienced web developer",
        languagesKnown: "English, Spanish"
    },
    {
        fullName: "Jane Smith",
        occupation: "Graphic Designer",
        skills: "Adobe Photoshop, Illustrator",
        profileImage: "https://source.unsplash.com/random/200x200?sig=incrementingIdentifier",
        description: "Creative graphic designer with a passion for visual storytelling",
        languagesKnown: "English, French"
    },
    {
        fullName: "Alex Johnson",
        occupation: "Writer",
        skills: "Content creation, Copywriting",
        profileImage: "https://source.unsplash.com/random/200x200?sig=incrementingIdentifier",
        description: "Versatile writer with a flair for words",
        languagesKnown: "English, German"
    },
    {
        fullName: "Emily Brown",
        occupation: "Social Media Manager",
        skills: "Social media strategy, Content scheduling",
        profileImage: "https://source.unsplash.com/random/200x200?sig=incrementingIdentifier",
        description: "Expert in managing social media presence",
        languagesKnown: "English, Spanish"
    },
    {
        fullName: "Michael Chen",
        occupation: "Data Scientist",
        skills: "Python, Machine Learning",
        profileImage: "https://source.unsplash.com/random/200x200?sig=incrementingIdentifier",
        description: "Analytical thinker leveraging data to drive insights",
        languagesKnown: "English, Mandarin"
    },
    {
        fullName: "Ava Rodriguez",
        occupation: "Marketing Specialist",
        skills: "Digital marketing, SEO",
        profileImage: "https://source.unsplash.com/random/200x200?sig=incrementingIdentifier",
        description: "Strategic marketer driving online visibility",
        languagesKnown: "English, Spanish"
    },
    {
        fullName: "Oliver Kim",
        occupation: "Photographer",
        skills: "Portrait photography, Photo editing",
        profileImage: "https://source.unsplash.com/random/200x200?sig=incrementingIdentifier",
        description: "Capturing moments through the lens",
        languagesKnown: "English, Korean"
    },
    {
        fullName: "Sophie White",
        occupation: "UX/UI Designer",
        skills: "Wireframing, Prototyping",
        profileImage: "https://source.unsplash.com/random/200x200?sig=incrementingIdentifier",
        description: "Creating seamless user experiences with a touch of creativity",
        languagesKnown: "English, French"
    },
    {
        fullName: "William Taylor",
        occupation: "Video Editor",
        skills: "Video editing, Motion graphics",
        profileImage: "https://source.unsplash.com/random/200x200?sig=incrementingIdentifier",
        description: "Crafting compelling visual stories through video",
        languagesKnown: "English, Spanish"
    }
  ]);

  const filterFreelancers = () => {
    // Implement your filtering logic here
    const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();
    const filteredFreelancers = freelancers.filter((freelancer) =>
      freelancer.fullName.toLowerCase().includes(searchTerm) ||
      freelancer.occupation.toLowerCase().includes(searchTerm)
    );
    displayFreelancerCards(filteredFreelancers);
  };

  const displayFreelancerCards = (freelancersToDisplay) => {
    const freelancerContainer = document.getElementById("freelancerContainer");
    freelancerContainer.innerHTML = "";

    freelancersToDisplay.forEach((freelancer) => {
      const card = document.createElement("div");
      card.classList.add("freelancer-card");

      card.innerHTML = `
          <img src="${freelancer.profileImage}" alt="${freelancer.fullName}">
          <h2>${freelancer.fullName}</h2>
          <p>${freelancer.occupation}</p>
          <p>${freelancer.skills}</p>
          <button class="view-profile-btn" onclick="viewProfile('${freelancer.fullName}')">View Profile</button>
      `;

      freelancerContainer.appendChild(card);
    });
  };

  const viewProfile = (fullName) => {
    // Implement viewing profile logic here
    console.log(`Viewing profile for ${fullName}`);
  };

  useEffect(() => {
    // Add event listeners when the component mounts
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", filterFreelancers);
    searchInput.addEventListener("change", filterFreelancers);

    // Display the initial set of freelancer cards
    displayFreelancerCards(freelancers);

    // Remove event listeners when the component unmounts
    return () => {
      searchInput.removeEventListener("input", filterFreelancers);
      searchInput.removeEventListener("change", filterFreelancers);
    };
  }, [freelancers]);

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
        <input type="text" id="searchInput" placeholder="Search by name or occupation" />
      </section>

      <section className="freelancer-container" id="freelancerContainer">
        {/* Display freelancer cards here */}
      </section>
    </div>
  );
};

export default HireComponent;
