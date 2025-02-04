import React from 'react'
import styles from "./mobileHeader.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const MobileHeader = ({setShowPostArea, close}) => {
  const router = useRouter()
  
  return (
    <div className={styles.mobileHeaderContainer}>
      <button
        onClick={() => {
          if (close) {
            close();
          } else {
            router.back();
          }
        }}
      >
        <svg aria-hidden="true" width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.292891 6.79289C-0.0976333 7.18342 -0.0976334 7.81658 0.29289 8.2071L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84314C8.46159 1.45262 8.46159 0.819455 8.07107 0.42893C7.68054 0.038406 7.04738 0.038406 6.65685 0.42893L0.292891 6.79289ZM28 6.5L0.999998 6.5L0.999998 8.5L28 8.5L28 6.5Z" fill="#263238" fillOpacity="0.6"/>
        </svg>
      </button>

      <Image
        src="/ventmoir.svg"
        alt="Ventmoir logo"
        width={53}
        height={52}
        priority
      />
    </div>
  )
}

export default MobileHeader
