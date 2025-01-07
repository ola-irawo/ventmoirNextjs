import React from 'react'
import styles from "./verifyEmail.module.css"
import Image from 'next/image'

const VerifyEmail = () => {
  return (
    <section className={styles.loginSection}>
      <form action="" className={styles.logInForm}>
        
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

        <header>
          <h2 className={styles.loginHeader}>Login</h2>
        </header>

        <div className={styles.inputContainer}>

          <label htmlFor="">
            <input
              type='password'
              name="password"
              placeholder="Enter otp"
              className={styles.formInput}
            />
          </label>

          <button
            className={styles.loginButton}
          >
            Verify
          </button>
        </div>
        
      </form>
    </section>
  )
}

export default VerifyEmail
