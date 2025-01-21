import React from 'react'
import styles from "./profileSetup.module.css"
import Image from 'next/image'

const ProfileSetup = () => {
  return (
    <form className={styles.profileSetupForm}>
        <header className={styles.profileSetupHeader}>
            <h2 className={styles.profileSetupUsername}>Hi Irawo</h2>

            <p className={styles.profileSetupText}>Before you continue, Kindly upload your profile avatar (You can choose from a selection of avatars provided only by Ventmoir) </p>
        </header>

        <label
            htmlFor="profile-file"
            className={styles.profileSetupFormFile}
        >
            <input
                type="file"
                id="profile-file"
                className={styles.profileSetupFileInput}
            />

            <Image
                src="/avatarPlaceholder.png"
                alt="User avatar"
                width={100}
                height={120}
                className={styles.profileSetupAvatar}
            />

        </label>

        <label className={styles.profileSetupBio}>
            <h3 className={styles.profileSetupSpan}>Bio <span className={styles.span}> (up to 300 characters)</span></h3>
            <textarea 
                className={styles.profileSetupFormTextarea}
            />
        </label>
        
        {/* <div>
            <button
                className={styles.profileSetupBtn}
            >
                Continue
            </button>
        </div> */}
    </form>
  )
}

export default ProfileSetup
