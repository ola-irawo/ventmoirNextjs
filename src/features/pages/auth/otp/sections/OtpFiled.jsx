import React from 'react'
import styles from "./otpField.module.css"
import Image from 'next/image'

const OtpField = () => {
  return (
    <section className={styles.otpSection}>
      <form action="" className={styles.otpForm}>
        
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

        <header className={styles.otpHeaderContainer}>
          <h2 className={styles.otpHeader}>OTP Verification</h2>
          <p className={styles.otpText}>Enter the OTP sent to irawo@gmail.com</p>
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
            className={styles.otpButton}
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

export default OtpField
