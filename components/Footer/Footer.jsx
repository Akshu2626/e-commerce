import React from 'react';
import Image from 'next/image';
import logo from '../../src/assets/Logo.png';
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <Image src={logo} width={50} alt="logo" />
          <p>
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className={styles.iconContainer}>
            <div>
              <GrTwitter size={20} />
            </div>
            <div>
              <GrFacebookOption size={20} />
            </div>
            <div>
              <GrLinkedinOption size={20} />
            </div>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className={styles.footerLinks}>
          <h3>Support</h3>
          <ul>
            <li>Support Career</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        <div className={styles.footerLinks}>
          <h3>Contact</h3>
          <ul>
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
