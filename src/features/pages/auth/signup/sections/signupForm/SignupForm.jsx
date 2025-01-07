import React from 'react'
import styles from "./signupForm.module.css"
import Link from 'next/link'
import Image from 'next/image'

const SignupForm = () => {

  return (
    <section className={styles.signupSection}>
      
      <form action="" className={styles.signupForm}>

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
          <h2 className={styles.signupHeader}>Sign up</h2>
        </header>

        <div className={styles.inputContainer}>

          <label htmlFor="">
            <input
              type='text'
              name="username"
              placeholder="username"
              className={styles.formInput}
            />
          </label>

          <label htmlFor="">
            <input
              type='email'
              name="email"
              placeholder="Enter your email"
              className={styles.formInput}
            />
          </label>

          <label htmlFor="">
            <input
              type='password'
              name="password"
              placeholder="password"
              className={styles.formInput}
            />
          </label>

          <label htmlFor="">
            <input
              type='password'
              name="confirmPassword"
              placeholder="password"
              className={styles.formInput}
            />
          </label>

          <label htmlFor="">
            <select
                className={styles.formInput}
            >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer not to say"> Prefer not to say</option>
            </select>
          </label>

          <button
            className={styles.signupButton}
          >
            Sign in
          </button>
        </div>
        
        <aside className={styles.callToAction}>
        <p className={styles.callToActionText}>
          Not a member?
        </p>

        <Link 
            href={"/signup"}
            className={styles.callToActionLink}
        >
            Sign up
        </Link>
      </aside>
      </form>
    </section>
  )
}

export default SignupForm
