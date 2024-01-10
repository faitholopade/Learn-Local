import React from 'react'
import logo from '../assets/Logo.png';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom';
function Navbar() {
    const logoContainerStyles = {
        borderRadius: '50%',
        background: '#d38e34',
        width: '190px', 
        height: '190px', 
        marginRight: '20px', // Add some right margin to separate it from the Links
        marginTop: '0px',
        marginLeft:'10px',
        overflow: 'hidden', // Ensure the logo stays within the circular container
      };
    const logoStyles = {
        height: '290px',
        width: '290px',
        marginRight: '20px',
        marginLeft: '-75px',
        marginTop: '-120px',
    };

    
    return (
        <div className="navbar">
            {/*logo stays within the container, connect the logo to the home page */ }
            <div style={logoContainerStyles}>
                <Link to="/">
                    <img src={logo} alt="Logo" style={logoStyles} />
                </Link>
            </div>
            {/*routes to all pages*/}
            <div className="Link"><Link to="/About">ABOUT US</Link></div>
            <div className="Link"><Link to="/Blog">BLOG</Link></div>
            <div className="Link"><Link to="/Contact">CONTACT</Link></div>
            <div className="Link"><Link to="/Book">BOOK</Link></div>
            <div className="Link"><Link to="/Prices">PRICES</Link></div>
        </div>
    );
}


export default Navbar;