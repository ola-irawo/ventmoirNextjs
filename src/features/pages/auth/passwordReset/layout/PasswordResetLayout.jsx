"use client"
import React, { useState } from 'react'
import ForgotPassword from "../pages/forgotPassword/ForgotPassword"
import ChangePassword from "../pages/changePassword/ChangePassword"
import VerifyEmail from "../pages/verifyEmail/VerifyEmail"

const PasswordResetLayout = () => {
    const [authReset, setAuthReset] = useState("verifyEmail")

    const renderAuthSteps = () => {
        switch(authReset){

          case "forgetPassword":
              return <ForgotPassword
              authReset={authReset} 
              setAuthReset={setAuthReset} 
            />
          case "verifyEmail":
              return <VerifyEmail
              authReset={authReset} 
              setAuthReset={setAuthReset}
            />
          case "changePassword":
            return <ChangePassword
              setAuthReset={setAuthReset} 
            />
          default:
            return <ForgotPassword authReset={authReset}  setAuthReset={setAuthReset} />
        }
      }

  return (
    <div>
      {renderAuthSteps()}
    </div>
  )
}

export default PasswordResetLayout
