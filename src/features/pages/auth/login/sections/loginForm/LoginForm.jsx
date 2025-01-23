import React from 'react'
import styles from "./loginForm.module.css"
import Link from 'next/link'
import Image from 'next/image'
import AuthErrorMessage from "../../../components/authErrorMessage/AuthErrorMessage"

const LoginForm = () => {
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
              type='text'
              name="username"
              placeholder="username"
              className={styles.formInput}
            />
            {true && <AuthErrorMessage errorMessage={"Email already taken. Please try another email."}/>}
          </label>

          <label htmlFor="">
            <input
              type='password'
              name="username"
              placeholder="password"
              className={styles.formInput}
            />
          </label>

          <p className={styles.forgotPassword}>Forget password</p>

          <button
            className={styles.loginButton}
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

export default LoginForm
