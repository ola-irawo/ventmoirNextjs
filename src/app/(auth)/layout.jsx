"use client";

import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./authLayout.module.css";

const Layout = ({ children }) => {
  const pathname = usePathname();

  // Define content based on the current route
  const content = {
    "/login": {
      imgSrc: "/auth/login.svg",
      heading: "Welcome Back!",
      subText: "Log in to continue your journey with Ventmoir.",
      backgroundColor: "#B3E1F9"
    },
    "/signup": {
      imgSrc: "/auth/register.svg",
      heading: "Join Ventmoir",
      subText: "...bridging the gap between social media and mental health.",
      backgroundColor: "#D89785"
    },
    "/otp": {
      imgSrc: "/auth/otp.svg",
      heading: "Verify Your Account",
      subText: "Enter the OTP sent to your email to verify your account.",
      backgroundColor: "#827F54"
    },
    "/password-reset": {
      imgSrc: "/auth/login.svg",
      heading: "Welcome Back",
      subText: "...eradicating the isolation struggles often assoicated with mental health.",
      backgroundColor: "#B3E1F9"
    },
  };

  // Get the content for the current route or a default
  const { imgSrc, heading, subText,  backgroundColor} = content[pathname] || {
    imgSrc: "/defaultImg.png",
    heading: "Welcome to Ventmoir",
    subText: "Connect, share, and grow with us.",
  };

  return (
    <div className={styles.authLayoutContainer}>
      <div
         className={styles.authImg}
         style={{
          backgroundColor: backgroundColor
        }}
      >
        <div>
          <Image
            src={imgSrc}
            alt={heading}
            width={300}
            height={300}
            priority
            className={styles.signupImg}
          />
        </div>
        <div>
          <h2 className={styles.imgHead}>{heading}</h2>
          <p className={styles.imgText}>{subText}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
