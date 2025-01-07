import React from 'react'
import styles from "./topbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import NotificationIcon from '../../components/ui/notificationIcon/NotificationIcon'
import HomeIcon from '../navbar/navIcons/HomeIcon'

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
                className={styles.brandLogo}
            />
        </div>

        <div className={styles.topbarContent}>
            {/* <h1 className={styles.pathName}>Home</h1> */}
            <div className={styles.profileLinkContainer}>

                <Link href={"/profile"} className={styles.profileLink}>
                    user Profile
                </Link>
            </div>

            <form action="" className={styles.searchContainer}>

                <div className={styles.searchWrapper}>
                    <label htmlFor="search">
                        <HomeIcon />
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

                {/* <div className={styles.profileLinkContainer}>
                    <Link href={"/profile"} className={styles.profileLink}>
                        user Profile
                    </Link>
                </div> */}
            </div>
        </div>
      
    </div>
  )
}

export default Topbar
