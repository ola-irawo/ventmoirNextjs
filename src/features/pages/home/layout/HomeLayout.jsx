import React from 'react'
import styles from "./homeLayout.module.css"
import PostStream from '../sections/postStream/PostStream'

const HomeLayout = () => {
  return (
    <div className={styles.homeLayoutContainer}>
      <PostStream />

      <div className={styles.homeWidget}>
        <h1>Widget</h1>
      </div>
    </div>
  )
}

export default HomeLayout
