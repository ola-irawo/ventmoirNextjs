"use client"
import React, { useState } from 'react'
import styles from "./onboardingLayout.module.css"
import JoinSociety from '../sections/joinSociety/JoinSociety';
import WelcomeMessage from '../sections/welcomeMessage/WelcomeMessage';
import ProfileSetup from '../sections/profileSetup/ProfileSetup';
import { useRouter } from 'next/navigation';

const OnboardingLayout = () => {
    const [onboardingStep, setOnboardingStep] = useState(1);
    const router = useRouter()

    const handleNextStep = () => {
        setOnboardingStep(prevStep => prevStep + 1);
    
    };

    const renderStep = () => {
      if (onboardingStep >  3 ) {
        return router.push("/", { replace: true })
      }

      switch (onboardingStep) {
        case 1:
          return <JoinSociety  />;
        case 2:
          return <ProfileSetup />;
        case 3:
          return <WelcomeMessage />;
        default:
          return <JoinSociety />;
      }
    };

  return (
    <div className={styles.onboardingContainer}>
      <div className={styles.onboardingStepContainer}>
        <ul className={styles.onboardingStepList}>
          <li className={`${styles.onboardingStep} ${onboardingStep === 1 && styles.currentStep}`}>1</li>
          <li className={`${styles.onboardingStep} ${onboardingStep === 2 && styles.currentStep}`}>2</li>
          <li className={`${styles.onboardingStep} ${onboardingStep === 3 && styles.currentStep}`}>3</li>
        </ul>

        <button
          className={styles.nextStepBtn}
          onClick={() => handleNextStep()}
        >
          Skip
        </button>
      </div>

      {renderStep()}

      <div className={styles.onboardingBtnContainer}>
        <button
          className={styles.onboardingNextStep}
          onClick={() => handleNextStep()}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default OnboardingLayout
