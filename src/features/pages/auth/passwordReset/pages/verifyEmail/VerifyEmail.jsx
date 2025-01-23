import React from 'react'
import styles from "./verifyEmail.module.css"
import Image from 'next/image'

const VerifyEmail = () => {
  return (
    <section className={styles.verifyEmailSection}>
      <form action="" className={styles.verifyEmailForm}>
        
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

        <header className={styles.verifyEmailHeaderContainer}>
          <h2 className={styles.verifyEmailHeader}>Verify email address</h2>
          <p className={styles.verifyEmailText}>We have sent a 6 digit code to +234******42. Kindly enter the code below to verify your phone number</p>
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
            className={styles.verifyEmailButton}
          >
            Verify
          </button>
        </div>
        
        <div className={styles.resendOtpContainer}>
          <p>Didn't receive OTP?</p>
          <button className={styles.resendOtpBtn}>Resend OTP.</button>
        </div>
      </form>
    </section>
  )
}

export default VerifyEmail
