import React from 'react'
import styles from "./forgotPassword.module.css"
import Image from 'next/image'

const ForgotPassword = () => {
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
              type='email'
              name="email"
              placeholder="Enter your email address"
              className={styles.formInput}
            />
          </label>

          <button
            className={styles.loginButton}
          >
            Send OTP
          </button>
        </div>
        
      </form>
    </section>
  )
}

export default ForgotPassword
