import React from "react";
import styles from "./sideBar.module.css";
import Link from "next/link";
import Logout from "@/components/logout/Logout";

const SideBar = ({ setShowSideBar}) => {
  return (
    <aside className={styles.sideBar} onClick={() => setShowSideBar(false)}>
      <div className={styles.userSidebar}>
        <Link className={styles.userSidebarLink} href={`profile`}>
          <img
            className={styles.userSidebarAvatar}
            src="/profileAvatar.png"
            alt="profile avatar"
          />
          <h2 className={styles.userSidebarName}>Lily</h2>
          <small className={styles.userSidebarSmall}>View profile</small>
        </Link>

        <ul className={styles.userSidebarList}>

          <li className={styles.userSidebarListItem}>
            <Link className={styles.userSidebarListLink} href="/settings">
                <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.3846 2.4566L21.385 2.45682C22.2492 2.94149 22.5377 4.01342 22.0488 4.85437C21.36 6.0337 21.2031 7.28119 21.7923 8.28039C22.3785 9.27464 23.5474 9.7569 24.9228 9.7569C25.9333 9.7569 26.7387 10.5688 26.75 11.5271V13.8539C26.75 14.8145 25.9413 15.62 24.9363 15.62C23.5614 15.62 22.3914 16.1021 21.8068 17.0978C21.219 18.0987 21.3815 19.3469 22.0774 20.5255C22.5629 21.3509 22.2772 22.4349 21.412 22.9201L21.4116 22.9204L19.0773 24.2314L19.0772 24.2313L19.0663 24.2377C18.3639 24.6478 17.4397 24.4077 17.0115 23.7054L16.8656 23.4581L16.8654 23.4578C16.1684 22.2774 15.1529 21.5298 13.9949 21.5298C12.8363 21.5298 11.824 22.2782 11.1335 23.4595C11.1333 23.46 11.133 23.4604 11.1327 23.4609L10.9885 23.7054C10.5602 24.4077 9.6361 24.6478 8.93365 24.2377L8.9337 24.2376L8.92274 24.2314L6.58841 22.9204L6.58801 22.9201C5.72411 22.4356 5.43546 21.3643 5.92374 20.5234C6.61865 19.3455 6.78062 18.0981 6.19323 17.0978C5.60862 16.1021 4.43859 15.62 3.06372 15.62C2.05043 15.62 1.25 14.8063 1.25 13.8539V11.5231C1.25 10.5625 2.05875 9.7569 3.06372 9.7569C4.43849 9.7569 5.60811 9.27498 6.19283 8.28154C6.78073 7.2827 6.61889 6.03814 5.92328 4.86597C5.43467 4.02358 5.72606 2.94023 6.58801 2.45682L6.58841 2.4566L8.92274 1.14553L8.92279 1.14562L8.93365 1.13928C9.64216 0.725584 10.5579 0.976288 10.9563 1.66267L10.9563 1.66268L10.959 1.66726L11.1074 1.91887L11.1076 1.9192C11.8046 3.09952 12.8201 3.84719 13.9781 3.84719C15.1368 3.84719 16.1491 3.09871 16.8396 1.91729C16.8398 1.91689 16.84 1.91648 16.8403 1.91608L16.9845 1.67152C17.4128 0.96929 18.3369 0.729121 19.0394 1.13928L19.0393 1.13938L19.0503 1.14553L21.3846 2.4566ZM8.85795 12.6885C8.85795 15.4864 11.177 17.7425 13.9933 17.7425C16.8095 17.7425 19.1286 15.4864 19.1286 12.6885C19.1286 9.89058 16.8095 7.63448 13.9933 7.63448C11.177 7.63448 8.85795 9.89058 8.85795 12.6885Z" stroke="black" strokeWidth="1.5"/>
                </svg>

                <p>Settings</p>
            </Link>
          </li>

          <li className={styles.userSidebarListItem}>
            <div className={styles.userSidebarListLink} >
                <Logout />
                <p>Logout</p>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
