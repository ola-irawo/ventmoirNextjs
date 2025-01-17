import React from 'react'
import styles from "./topbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import NotificationIcon from '../../components/ui/notificationIcon/NotificationIcon'
import PathnameIndicator from "./components/pathnameIndicator/PathnameIndicator"

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
            <PathnameIndicator />

            <div className={`${styles.profileLinkContainer} ${styles.hiddenOnDesktop}`}>

                {/* <Link href={"/profile"} className={styles.profileLink}>
                    user Profile
                </Link> */}
                <Image
                    src="/profileAvatar.png"
                    alt="User avatar"
                    width={34}
                    height={34}
                    className={styles.profileLink}
                />
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
                    <Image
                        src="/profileAvatar.png"
                        alt="User avatar"
                        width={34}
                        height={34}
                        className={styles.profileLink}
                    />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Topbar
