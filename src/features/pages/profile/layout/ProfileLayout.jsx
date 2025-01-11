import React from 'react'
import styles from "./profileLayout.module.css"
import ProfileCard from "../sections/profileCard/ProfileCard"
import ProfileFeed from "../sections/profileFeed/ProfileFeed"

const ProfileLayout = () => {
  return (
    <div className={styles.profileLayoutContainer}>
      <div>
        <ProfileCard />
        <ProfileFeed />
      </div>


      <div className={styles.profileWidget}>
        Widget
      </div>
    </div>
  )
}

export default ProfileLayout
