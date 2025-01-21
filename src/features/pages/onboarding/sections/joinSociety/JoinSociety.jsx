import React from 'react';
import Image from 'next/image';
import styles from './joinSociety.module.css';

const JoinSociety = () => {
    const societies = ["Anxiety", "Trauma", "Marriage", "Relationship"];

    return (
        <section>
            <article className={styles.societyArticle}>
                <div className={styles.societyHeader}>
                    <div className={styles.societyImageContainer}>
                        <Image
                            src="/profileAvatar.png"
                            className={styles.societyImage}
                            alt="society"
                            width={50}
                            height={50}
                        />
                    </div>

                    <div className={styles.societyTextContainer}>
                        <h2 className={styles.textHeader}>Join a Society</h2>
                        <p className={styles.textDesc}>Select a society you’d like to join.</p>
                    </div>
                </div>

                <div className={styles.societySupportContainer}>
                    {societies.map((society, index) => (
                        <div
                            className={styles.societySupport}
                            key={index}
                            onClick={() => console.log(`Joined ${society}`)}
                        >
                            <div className={styles.supportImageContainer}>
                                <Image
                                    src="/societyImg.png"
                                    className={styles.supportImage}
                                    alt={society}
                                    width={50}
                                    height={50}
                                />
                            </div>

                            <div className={styles.supportInfoContainer}>
                                <h3>{society}</h3>
                                <p>{Math.floor(Math.random() * 100)} Members</p>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    );
};

export default JoinSociety;
