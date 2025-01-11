import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletter_background}>Newsletter</div>
      <h1>Subscribe Our Newsletter</h1>
      <p>Get the latest information and promo offers directly</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Input email address"></input>
        <button type="submit">Get Started</button>
      </form>
    </section>
  );
};

export default Newsletter;
