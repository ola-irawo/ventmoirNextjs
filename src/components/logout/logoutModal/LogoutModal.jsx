import React from 'react'
import styles from "./logoutModal.module.css"

const LogoutModal = ({setShowLogoutModal}) => {
  return (
    <aside className={styles.logoutContainer}>
      <div className={styles.logoutWrapper}>
        <button 
            className={styles.closeLogoutModal}
            onClick={() => setShowLogoutModal(false)}
        >
            <svg aria-hidden="true" width="14" height="21" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.2686 3.15869L2.73155 22.6957" stroke="#191919" strokeOpacity="0.8" strokeWidth="4" strokeLinecap="round"/>
                <path d="M3.49902 2L21.4542 23" stroke="#191919" strokeOpacity="0.8" strokeWidth="4" strokeLinecap="round"/>
            </svg>
        </button>
        
        <h2 className={styles.logoutText}>Are you sure you want to Log out</h2>

        <div className={styles.logoutBtnContainer}>
            <button 
                className={styles.logoutBtn}
                onClick={() => setShowLogoutModal(false)}
            >
                No
            </button>
            <button className={styles.logoutBtn}>yes</button>
        </div>

      </div>
    </aside>
  )
}

export default LogoutModal
