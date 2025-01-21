import React from 'react';
import styles from './welcomeMessage.module.css';

const WelcomeMessage = ({ handleNextStep }) => {
    return (
        <aside className={styles.welcomeMessage}>
            <h2>Welcome to Ventmoir</h2>

            <p>
                We’re so glad you’re here. You’ve just taken a powerful step towards finding a supportive community that understands, listens, and cares.
            </p>

            <p>
                Your voice matters, and we can’t wait to hear your story. Feel free to explore, connect, and reach out for support anytime.
                Together, we’re building a stronger, more supportive world 🤗.
            </p>

            {/* <div className={styles.welcomeMessageButton}>
                <button
                    onClick={() => handleNextStep()}
                >
                    Close
                </button>
            </div> */}
        </aside>
    );
};

export default WelcomeMessage;
