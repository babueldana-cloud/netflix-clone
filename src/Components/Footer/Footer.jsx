import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>

      <div className={styles.footerLinks}>
        <span>Audio Description</span>
        <span>Help Center</span>
        <span>Gift Cards</span>
        <span>Media Center</span>
        <span>Investor Relations</span>
        <span>Jobs</span>
        <span>Terms of Use</span>
        <span>Privacy</span>
        <span>Legal Notices</span>
        <span>Cookie Preferences</span>
        <span>Corporate Information</span>
        <span>Contact Us</span>
      </div>

      <p className={styles.copyright}>
        © 1997-2026 Netflix Clone
      </p>
    </footer>
  );
}

export default Footer;
