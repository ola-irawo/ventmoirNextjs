import React from 'react';
import styles from "./societyResource.module.css";
// import EmergencyContact from './emergencyContact/EmergencyContact';
import Link from 'next/link';

const SocietyResource = ({ societyName, currentSociety, screenWidth }) => {

  return (
    <section className={styles.container}>
      {/* {isMobile && <h2 className={styles.mobileHeader}>{societyName || 'Society'}</h2>} */}

      {/* Welcome Message Section */}
      {/* Uncomment if the currentSociety has an "about" property */}
      {/* <p className={styles.welcomeMessage}>{currentSociety?.about?.welcome}</p> */}

      {/* How Can I Help Section */}
      <article className={styles.article}>
        <h2 className={styles.header}>How can I help?</h2>
        <p className={styles.text}>
          You can help by sharing your thoughts, responding to vents, sharing your story (if you're comfortable), and offering support to others.
          Together, we will build a supportive environment where everyone feels heard and valued.
        </p>
      </article>

      {/* Speak to a Therapist Section */}
      <article className={styles.article}>
        <h2 className={styles.header}>Speak to a licensed therapist</h2>
        <p className={styles.text}>
          Seeking personalized assistance from a licensed therapist specializing in marriage counseling?
          <br />
          Click <Link href="tel:your-therapist-phone-number" className={styles.link}>here</Link> to connect with a therapist.
        </p>
      </article>

      {/* Emergency Contact Section */}
      {/* <EmergencyContact /> */}

      {/* Questions or Suggestions Section */}
      <article className={styles.article}>
        <h2 className={styles.header}>Do you have a question or suggestion?</h2>
        <p className={styles.text}>
          If you need assistance or have a suggestion, feel free to contact us{' '}
          <Link href="/contact" className={styles.link}>here</Link>. We'll respond to you shortly.
        </p>
      </article>
    </section>
  );
};

export default SocietyResource;
