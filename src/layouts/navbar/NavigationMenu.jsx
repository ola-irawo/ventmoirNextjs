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

const NavigationMenu = () => {
  const navItems = [
    {
      icon: <HomeIcon />,
      name: "Home"
    },
    {
      icon:<SocietiesIcon />,
      name: "Societies"
    },
    {
      icon: <NotificationIcon />,
      name: "Notifications"
    },
    {
      icon: <BookmarkIcon />,
      name: "Bookmarks"
    },
    {
      icon: <ProfileIcon />,
      name: "Profile"
    },
    {
      icon: <SettingIcon />,
      name: "Setting"
    },
    {
      icon: <SettingIcon />,
      name: "Logout"
    },
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
          navItems.slice(0, 4).map((item, index) => {
            return <li className={styles.navItem} key={index}>
              <Link href="/" className={styles.navLink} title={item.name}>
              {item.icon}
                <span className={styles.navName}>{item.name}</span>
              </Link>
            </li>
          })
        }
      </ul>
    </nav>
  )
}

export default NavigationMenu
