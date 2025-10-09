import '../styles/footer.css';
import sendIcon from '../assets/images/icon-send.svg';
import { FacebookIcon } from '../assets/images/catigoreisIcons/socialMediaIcons';
import { InstagramIcon } from '../assets/images/catigoreisIcons/socialMediaIcons';
import { XIcon } from '../assets/images/catigoreisIcons/socialMediaIcons';
import { LinkedInIcon } from '../assets/images/catigoreisIcons/socialMediaIcons';
import qrCode from '../assets/images/qrcode.svg';
import downloadAppStore from '../assets/images/download-appstore.png';
import downloadPlayStore from '../assets/images/download-playstore.png';
import { useState } from 'react';

export default function Footer() {
  const footerSections = [
    {
      type: 'subscription',
      title: 'Exclusive',
      links: ['Get 10% off your first order'],
    },
    {
      type: 'support',
      title: 'Support',
      links: [
        '111 Bijoy sarani, Dhaka, DH 1515, Bangladesh',
        'exclusive@gmail.com',
        '+88015-88888-9999',
      ],
    },
    {
      type: 'links',
      title: 'Account',
      links: ['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'],
    },
    {
      type: 'links',
      title: 'Quick Link',
      links: ['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'],
    },
    {
      type: 'app',
      title: 'Download App',
      links: ['Save $3 with App New User Only'],
    },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-main-content">
        {footerSections.map((section, index) => (
          <FooterSection key={index} section={section} />
        ))}
      </div>
      <FooterBottomBar text="© Copyright Rimei 2022. All right reserved" />
    </footer>
  );
}

function FooterSection({ section }) {
  const { type, title, links } = section;

  const [hoverdIcon, setHoverdIcon] = useState();
  const handleMouseOver = (icon) => {
    setHoverdIcon(icon);
  };
  if (type === 'subscription') {
    return (
      <div className="footer-column subscription-section">
        <h4 className="column-title">{title}</h4>
        <p className="subscription-text">{links[0]}</p>
        <div className="email-input-container">
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          />
          <button className="email-submit-button" aria-label="Subscribe">
            <img src={sendIcon} />
          </button>
        </div>
      </div>
    );
  }

  if (type === 'support' || type === 'links') {
    return (
      <div className="footer-column">
        <h4 className="column-title">{title}</h4>
        <ul className="column-list">
          {links.map((link, i) => (
            <li key={i} className="list-item">
              {type === 'support' ? <p>{link}</p> : <a href="#">{link}</a>}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (type === 'app') {
    return (
      <div className="footer-column app-download-section">
        <h4 className="column-title">{title}</h4>
        <p className="app-text">{links[0]}</p>
        <div className="app-badges">
          <div className="qr-code-placeholder">
            <img src={qrCode} alt="QR Code" />
          </div>
          <div className="app-stores">
            <img src={downloadPlayStore} alt="Google Play" className="badge" />
            <img src={downloadAppStore} alt="App Store" className="badge" />
          </div>
        </div>
        <div className="social-icons">
          <FacebookIcon
            onMouseOver={() => handleMouseOver('facebook')}
            color={hoverdIcon === 'facebook' ? '#DB4444' : 'white'}
            onMouseOut={() => setHoverdIcon(null)}
          />
          <XIcon
            onMouseOver={() => handleMouseOver('x')}
            color={hoverdIcon === 'x' ? '#DB4444' : 'white'}
            onMouseOut={() => setHoverdIcon(null)}
          />
          <InstagramIcon
            onMouseOver={() => handleMouseOver('instagram')}
            color={hoverdIcon === 'instagram' ? '#DB4444' : 'white'}
            onMouseOut={() => setHoverdIcon(null)}
          />
          <LinkedInIcon
            onMouseOver={() => handleMouseOver('linkedin')}
            color={hoverdIcon === 'linkedin' ? '#DB4444' : 'white'}
            onMouseOut={() => setHoverdIcon(null)}
          />
        </div>
      </div>
    );
  }
}

function FooterBottomBar({ text }) {
  return (
    <div className="footer-bottom-bar">
      <p>{text}</p>
    </div>
  );
}
