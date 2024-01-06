import React from 'react'
import '../styles/About.css'
import {Link} from 'react-router-dom';
import aboutpic from '../assets/about.png'
function About() {
  return (
    <div className="aboutus">
      <div className ="aboutcontainer">
        <div className = "content">
          <h1>Welcome To Our Website</h1>
          <p>
            The Learn Local Food Programme teaches basic culinary and food sustainability skills to children and
            parents with the aim of improving food education and reducing food poverty.
          </p>
          <Link to = "Learnmore">
            <button className = "learnmore">Learn More</button>
          </Link>
        </div>    
        <div>
          <img src={aboutpic} alt="aboutpic" className="aboutpic" />
        </div>
      </div> 
    </div>
    
  );
}

export default About;