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
          return <JoinSociety handleNextStep={handleNextStep} />;
        case 2:
          return <ProfileSetup handleNextStep={handleNextStep} />;
        case 3:
        //   // This should show success or ready to get started.
          return <WelcomeMessage handleNextStep={handleNextStep} onboardingStep={onboardingStep} />;
        default:
          return <JoinSociety handleNextStep={handleNextStep} />;
      }
    };
  return (
    <div className={styles.onboardingContainer}>
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
