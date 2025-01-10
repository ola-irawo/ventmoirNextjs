import React from 'react'
import styles from "./navigationMenu.module.css"
import Link from "next/link"
import Image from 'next/image'
import HomeIcon from "./navIcons/HomeIcon"
import SocietiesIcon from "./navIcons/SocietiesIcon"
import NotificationIcon from "./navIcons/NotificationIcon"
import BookmarkIcon from "./navIcons/BookmarkIcon"
import ProfileIcon from "./navIcons/ProfileIcon"
import SettingIcon from "./navIcons/SettingIcon"
import Logout from "../../components/logout/Logout"


const NavigationMenu = () => {
  const navItems = [
    {
      icon: <HomeIcon />,
      name: "Home",
      path: "/"
    },
    {
      icon:<SocietiesIcon />,
      name: "Societies",
      path: "/societies"
    },
    {
      icon: <NotificationIcon />,
      name: "Notifications",
      path: "/notifications"
    },
    {
      icon: <BookmarkIcon />,
      name: "Bookmarks",
      path: "/bookmark"
    },
    {
      icon: <ProfileIcon />,
      name: "Profile",
      path: "/profile",
      hiddenOnMobile: true
    },
    {
      icon: <SettingIcon />,
      name: "Settings",
      path: "/settings",
      hiddenOnMobile: true

    },
    // {
    //   icon: <SettingIcon />,
    //   name: "Logout"
    // },
  ]
  
  return (
    <nav className={styles.navContainer} aria-label="Primary navigation">
      
      <div>
        <Image
          src="/ventmoir.svg"
          alt="Ventmoir logo"
          width={90}
          height={80}
          priority
          className={styles.brandLogo}
        />
      </div>

      <ul className={styles.navList}>
        {
          navItems.map((item, index) => {
            return <li 
              className={`${styles.navItem} ${
                item.hiddenOnMobile ? styles.hiddenOnMobile : ""
              }`} 
              key={index}
            >
              <Link href={item.path} className={styles.navLink} title={item.name}>
              {item.icon}
                <span className={styles.navName}>{item.name}</span>
              </Link>
            </li>
          })
        }

        <li className={`${styles.navItem} ${styles.hiddenOnMobile}`}>
          <Logout />
        </li>
      </ul>
    </nav>
  )
}

export default NavigationMenu
