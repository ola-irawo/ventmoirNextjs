import React from 'react'
import styles from "./changePassword.module.css"
import Image from 'next/image'

const ChangePassword = () => {
  return (
    <section className={styles.changePasswordSection}>
      <form action="" className={styles.changePasswordForm}>
        
      <div className={styles.brandLogoContainer}>
          <Image
            src={"/ventmoir.svg"}
            alt="Ventmoir logo"
            width={102}
            height={101}
            priority
            className={styles.brandLogo}
          />
        </div>

        <header className={styles.changePasswordHeaderContainer}>
          <h2 className={styles.changePasswordHeader}>Change Password</h2>
          <p className={styles.changePasswordText}>Enter new password</p>
        </header>

        <div className={styles.inputContainer}>

          <label htmlFor="">
            <input
              type='password'
              name="password"
              placeholder="New password"
              className={styles.formInput}
            />
          </label>

          <label htmlFor="">
            <input
              type='password'
              name="password"
              placeholder="Confirm password"
              className={styles.formInput}
            />
          </label>

          <button
            className={styles.changePasswordButton}
          >
            Submit
          </button>
        </div>
        
      </form>
    </section>
  )
}

export default ChangePassword
