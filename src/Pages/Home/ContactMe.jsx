import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <hr className="divider" />
      <div className="contact--section--title--social">
        <h2 >Social's</h2>
      </div>
      
      <div className="contact--form--container">
        <div className="container">
          <ul className="social-media-icons-horizontal">
            <li>
              <a href="https://www.linkedin.com/in/avatapalli-vishnuvardhan-rao-2949a7185/" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={faLinkedin} size="1x" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://github.com/vishnu2407" target="_blank" rel="noopener noreferrer">
                 <FontAwesomeIcon icon={faGithub} size="1x" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/vvr_avatapalli/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="1x" className="social-icon" />
              </a>
            </li>
            <li>
              <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} size="1x" className="social-icon" />
              </a>
            </li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
}