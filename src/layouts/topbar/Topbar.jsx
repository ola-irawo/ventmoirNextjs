import React from 'react'
import styles from "./topbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import NotificationIcon from '../../components/ui/notificationIcon/NotificationIcon'

const Topbar = () => {
  return (
    <div className={styles.topbarContainer}>
        <div className={styles.brandLogoContainer}>
            <Image
                src="/ventmoir.svg"
                alt="Ventmoir logo"
                width={44}
                height={43}
                priority
                className={`${styles.brandLogo} ${styles.hiddenOnDesktop}`}
            />
        </div>

        <div className={styles.topbarContent}>

            <div className={`${styles.pathNameContainer} ${styles.hiddenOnMobile}`}>
                {/* <button className={styles.goBackBtn}>
                    <svg aria-hidden="true" width="22" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292891 6.79289C-0.0976333 7.18342 -0.0976334 7.81658 0.29289 8.2071L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84314C8.46159 1.45262 8.46159 0.819455 8.07107 0.42893C7.68054 0.038406 7.04738 0.038406 6.65685 0.42893L0.292891 6.79289ZM28 6.5L0.999998 6.5L0.999998 8.5L28 8.5L28 6.5Z" fill="#263238" fillOpacity="0.6"/>
                    </svg>
                </button> */}

                <h1 className={styles.pathName}>Home</h1>
            </div>

            <div className={`${styles.profileLinkContainer} ${styles.hiddenOnDesktop}`}>

                <Link href={"/profile"} className={styles.profileLink}>
                    user Profile
                </Link>
            </div>

            <form action="" className={styles.searchContainer}>

                <div className={styles.searchWrapper}>
                    <label htmlFor="search">
                        <svg aria-hidden="true" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.28025 12.9356C10.602 12.9356 13.2949 10.3155 13.2949 7.08352C13.2949 3.85151 10.602 1.23145 7.28025 1.23145C3.95847 1.23145 1.26562 3.85151 1.26562 7.08352C1.26562 10.3155 3.95847 12.9356 7.28025 12.9356Z" stroke="black" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.9303 13.5514L12.6641 12.3193" stroke="black" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </label>

                    <input
                        type="text"
                        name="search"
                        id='search'
                        placeholder="Search Ventmoir"
                        className={styles.searchInput}
                    />
               </div>

            </form>

            <div className={styles.profileandNotificationContainer}>
                <div className={styles.notificationContainer}>
                    <Link href={"/notification"}>
                        <NotificationIcon />
                    </Link>
                </div>

                <div className={`${styles.profileLinkContainer} ${styles.hiddenOnMobile}`}>
                    <Link href={"/profile"} className={styles.profileLink}>
                        user Profile
                    </Link>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Topbar
