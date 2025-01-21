import React from "react";
import styles from "./profileAvatarSelector.module.css";
import MobileHeader from "../ui/mobileHeader/MobileHeader";
import Image from "next/image";

const ProfileAvatarSelector = () => {
  const allProfileAvatars = ["1", "2", "3"]; // Ensure all elements are strings for consistency

  return (
    <article
      className={styles.profileAvatarContainer}
      aria-labelledby="choose-profile-avatar"
      aria-modal="true"
    >
      <div className={styles.profileAvatarWrapper}>
        {/* Mobile Header */}
        <div className={styles.hiddenOnTabAndDesktop}>
          <MobileHeader />
        </div>

        {/* Header Section */}
        <div className={styles.profileAvatarHead}>
          <h2 id="choose-profile-avatar">Choose Profile Avatar</h2>
          <div className={styles.hiddenOnMobile}>
            <button aria-label="Click to close modal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 30 35"
                fill="none"
              >
                <path
                  d="M2.15967 32.7438L15.2558 17.4432L28.3519 32.7438M28.3519 2.14258L15.2533 17.4432L2.15967 2.14258"
                  stroke="#111111"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Avatar List */}
        <ul className={styles.profileAvatarList}>
          {allProfileAvatars.map((profileAvatar) => (
            <li
              key={profileAvatar}
              className={styles.profileAvatarItem}
              tabIndex="0"
              aria-label="Click to select profile avatar"
            >
              <Image
                src="/profileAvatar.png"
                alt="Profile avatar"
                width={50}
                height={50}
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProfileAvatarSelector;
