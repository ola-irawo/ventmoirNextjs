import React from 'react'
import styles from "./societyLayout.module.css"
import SocietyContent from '../sections/societyContent/SocietyContent'

const SocietyLayout = () => {
  return (
    <div className={styles.societyLayoutContainer}>
      <SocietyContent />

      <div className={styles.societyWidget}>
        <h1>Widget</h1>
      </div>
    </div>
  )
}

export default SocietyLayout
