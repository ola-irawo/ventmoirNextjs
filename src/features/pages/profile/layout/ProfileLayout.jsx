import React from 'react'
import ProfileCard from "../sections/profileCard/ProfileCard"
import ProfileFeed from "../sections/profileFeed/ProfileFeed"

const ProfileLayout = () => {
  return (
    <div>
      <ProfileCard />
      <ProfileFeed />
    </div>
  )
}

export default ProfileLayout
