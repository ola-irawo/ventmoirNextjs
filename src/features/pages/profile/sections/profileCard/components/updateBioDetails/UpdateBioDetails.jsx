import React, { useState } from "react";
import styles from "./updateBioDetails.module.css";
import Image from "next/image";
import ProfileAvatarSelector from "../../../../../../../components/profileAvatarSelector/ProfileAvatarSelector"

const UpdateBioDetails = ({setShowUpdateBioDetails}) => {
  const [showProfileAvatarSelector, setShowProfileAvatarSelector] = useState(false)

  const updateUserBio = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <article className={styles.updateBioContainer}>
      {showProfileAvatarSelector && <ProfileAvatarSelector setShowProfileAvatarSelector={setShowProfileAvatarSelector} />}

      <div className={styles.updateBioWrapper}>

      <div className={styles.hiddenOnTabAndDesktop}>
        <div className={styles.updateBioHeader}>
          <button 
            aria-label="Close modal"
            onClick={() => setShowUpdateBioDetails(false)}
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
            >
              <path
                d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538407 7.04738 0.538407 6.65686 0.928931L0.292893 7.29289ZM19 7L1 7L1 9L19 9L19 7Z"
                fill="#263238"
                fillOpacity="0.7"
              />
            </svg>
          </button>
          <div>
            <Image
              src={"/ventmoir.svg"}
              width={50}
              height={50}
              className={styles.updateBioHeaderImg}
              alt="Ventmoir Logo"
            />
          </div>
        </div>
      </div>

      <form className={styles.updateBioForm}>
        <div className={styles.updateBioHead}>
          <h2 className={styles.updateProfileHead}>Edit Profile</h2>
          <div className={styles.hiddenOnMobile}>
            <button
              onClick={() => setShowUpdateBioDetails(false)}
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="29"
                viewBox="0 0 24 29"
                fill="none"
              >
                <path
                  d="M2.30713 26.5727L12.0075 14.405L21.7079 26.5727M21.7079 2.2373L12.0057 14.405L2.30713 2.2373"
                  stroke="#111111"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <label htmlFor="avatar" className={styles.updateBioAvatarLabel}>
          <Image
            src={"/default-avatar.png"}
            width={50}
            height={50}
            alt="User avatar"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect
              width="40"
              height="40"
              rx="20"
              fill="black"
              fillOpacity="0.4"
            />
            <path
              d="M19 27H12C11.4696 27 10.9609 26.7893 10.5858 26.4142C10.2107 26.0391 10 25.5304 10 25V16C10 15.4696 10.2107 14.9609 10.5858 14.5858C10.9609 14.2107 11.4696 14 12 14H13C13.5304 14 14.0391 13.7893 14.4142 13.4142C14.7893 13.0391 15 12.5304 15 12C15 11.7348 15.1054 11.4804 15.2929 11.2929C15.4804 11.1054 15.7348 11 16 11H22C22.2652 11 22.5196 11.1054 22.7071 11.2929C22.8946 11.4804 23 11.7348 23 12C23 12.5304 23.2107 13.0391 23.5858 13.4142C23.9609 13.7893 24.4696 14 25 14H26C26.5304 14 27.0391 14.2107 27.4142 14.5858C27.7893 14.9609 28 15.4696 28 16V19.5M23 26H29M26 23V29"
              stroke="white"
              strokeOpacity="0.92"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 20C16 20.7956 16.3161 21.5587 16.8787 22.1213C17.4413 22.6839 18.2044 23 19 23C19.7956 23 20.5587 22.6839 21.1213 22.1213C21.6839 21.5587 22 20.7956 22 20C22 19.2044 21.6839 18.4413 21.1213 17.8787C20.5587 17.3161 19.7956 17 19 17C18.2044 17 17.4413 17.3161 16.8787 17.8787C16.3161 18.4413 16 19.2044 16 20Z"
              stroke="white"
              strokeOpacity="0.92"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input 
            type="file" 
            id="avatar" 
            className={styles.avatarInput} 
            onClick={(e) => {
              e.preventDefault()
              setShowProfileAvatarSelector(true)
            }}
          />
        </label>

        <div className={styles.displayName}>
          <label className={styles.displayNamelabel}>Display Name</label>
          <input type="text" className={styles.displayNameinput} placeholder="currentUsername" />
        </div>

        <div className={styles.bio}>
          <label className={styles.bioLabel}>Bio</label>
          <textarea placeholder="User bio content" className={styles.bioTextarea} />
        </div>

        <button className={styles.updateBioBtn}>Save changes</button>
      </form>
      </div>
    </article>
  );
};

export default UpdateBioDetails;
