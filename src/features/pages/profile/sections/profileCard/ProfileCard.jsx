import Image from 'next/image'
import React from 'react'
import styles from "./profileCard.module.css"

const ProfileCard = () => {
  return (
    <section className={styles.profileCardSection}>
      <div className={styles.profileCardWrapper}>

        <header className={styles.profileCardHeader}>
            <div className={styles.profileCardUserDetails}>
                <div className={styles.profileAvatarContainer}>
                    <Image
                      src="/profileAvatar.png"
                      alt={`User avatar`}
                      width={52}
                      height={52}
                      priority
                      className={styles.profileAvatar}
                    />
                </div>

                <div className={styles.usernameAndDateJoinedContainer}>
                    <h2 className={styles.username}>Lil Mascort</h2>
                    <time dateTime="" className={styles.dateJoined}>Joined 2023</time>
                </div>
            </div>

            <div className={styles.profileBtnContainer}>
                <button className={styles.editProfileBtn}>Edit profile</button>
            </div>
        </header>

        <div className={styles.userBioContainer}>
            <p className={styles.userBio}> 
                I'm Irawo, a firm believer in the power of sharing our stories and supporting one another on life's challenging journey. I'm here to lend a listening ear, offer guidance, and create a safe space for honest conversations about mental health. Together, let's embrace the journey toward better mental well-being and remind each other that we are never alone.
            </p>
        </div>
      </div>
    </section>
  )
}

export default ProfileCard
