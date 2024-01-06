import React from 'react';
import '../styles/Contact.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faWhatsapp }from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
function Contact() {

  return (
    
    
    <div className = "contact">
      <div className = "container">
        <a href="https://www.instagram.com/learn.localirl/" target="_blank" rel="noopener noreferrer" >
          <div className = "icon"><FontAwesomeIcon icon = {faInstagram} /><p>learn.localirl</p></div>
        </a>
      </div>
      <div className = "container">
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZcRgCRKtZVMJwGqNXFKxhDxMqqbVhngcjFJgRqmtdQhjqMlSscpkPsLMMLRdLZWhPPcPL" target="_blank" rel="noopener noreferrer">
          <div className = "icon"><FontAwesomeIcon icon = {faEnvelope} /><p>info.learnlocal@gmail.com</p></div>
        </a>
      </div>
      <div className = "container">
        <div className = "icon"><FontAwesomeIcon icon = {faWhatsapp}/><p>+353852857663</p></div>
      </div> 
    </div>

  );
}

export default Contact;