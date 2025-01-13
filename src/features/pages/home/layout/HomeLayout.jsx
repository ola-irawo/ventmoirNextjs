"use client"
import React, { useState } from 'react'
import styles from "./homeLayout.module.css"
import PostStream from '../sections/postStream/PostStream'
import PostButton from "../../../../components/ui/postButton/PostButton"
import PostArea from "../../../../components/postArea/PostArea"

const HomeLayout = () => {
  const [showPostArea, setShowPostArea] = useState(false) 
  return (
    <div className={styles.homeLayoutContainer}>
      <PostStream />

      <div className={styles.homeWidget}>
        <h1>Widget</h1>
        <div className={styles.hiddenOnMobile}>
          <PostButton setShowPostArea={setShowPostArea} />
        </div>
      </div>

      <div className={styles.hiddenOnTabAndDesktop}>
        <PostButton setShowPostArea={setShowPostArea} />
      </div>
      {showPostArea && <PostArea setShowPostArea={setShowPostArea} />}
    </div>
  )
}

export default HomeLayout
