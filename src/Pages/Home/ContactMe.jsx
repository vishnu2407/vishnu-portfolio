import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faInstagram, faGmail } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        {/* <p className="sub--title">Connect With Me</p> */}
        <h2>Social's</h2>
        <p className="text-lg">
          Feel free to reach out to me on social media platforms.
        </p>
      </div>
      <div className="contact--form--container">
        <div className="container">
          <ul className="social-media-icons-horizontal">
            <li color='darkblue'>
              <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li color='darkblue'>
              <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li color='darkblue'>
              <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li color='darkblue'>
              <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
            </li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
        <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">@CopyRight 2024 All Rights Reserved</p>
      </div>
      </div>
    </section>
  );
}
