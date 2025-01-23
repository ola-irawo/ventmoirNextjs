import React from 'react'
import styles from "./forgotPassword.module.css"
import Image from 'next/image'

const ForgotPassword = () => {
  return (
    <section className={styles.forgetPasswordSection}>
      <form action="" className={styles.forgotPasswordForm}>
        
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

        <header className={styles.forgotPasswordHeaderContainer}>
          <h2 className={styles.forgotPasswordHeader}>Forgot Password</h2>
          <p className={styles.forgotPasswordText}>Enter your Email Address</p>
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
            className={styles.forgotPasswordButton}
          >
            Send OTP
          </button>
        </div>
        
      </form>
    </section>
  )
}

export default ForgotPassword
