import React from 'react';
import styles from './blockedUserSetting.module.css';
import Image from 'next/image';

const BlockedUserSetting = () => {
    const allBlockedUsers = [
        {
          _id: "user1",
          username: "john_doe",
          avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          _id: "user2",
          username: "jane_smith",
          avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        {
          _id: "user3",
          username: "michael_lee",
          avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        {
          _id: "user4",
          username: "sophia_walker",
          avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        },
        {
          _id: "user5",
          username: "david_clark",
          avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        },
      ];

    return (
    <section className={styles.blockedUser}>
      <h2 className={styles.blockedUserTitle}>Blocked accounts</h2>

      <ul className={styles.blockedUserList} role="menu">
        {allBlockedUsers?.map((blockedUser, index) => (
          <li 
            key={blockedUser._id} 
            className={styles.blockedUserListItem} 
            aria-posinset={index + 1} 
            aria-setsize={allBlockedUsers.length} 
            role="menuitem" 
            tabIndex="0"
          >
            <div className={styles.blockedUserDetails}>
              <Image
                src={"/profileAvatar.png"} 
                alt={`user avatar`} 
                width={42}
                height={42}
                className={styles.blockedUserAvatar} 
              />

              <div>
                <div className={styles.blockedUserNameBtnContainer}>
                  <div className={styles.blockedUserNameContainer}>
                    <h3 className={styles.blockedUsername}>{blockedUser.username}</h3>
                    <small className={styles.blockedUserHandle}>@{blockedUser.username}</small>
                  </div>

                  <button 
                    className={styles.unblockUserBtn} 
                  >
                    Unblock
                  </button>
                </div>

                <p className={styles.blockedUserBio}>
                  This is user bio
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlockedUserSetting;
