import React from 'react'
import styles from "./postArea.module.css"
import MobileHeader from '../ui/mobileHeader/MobileHeader'
import Image from 'next/image'

const PostArea = ({setShowPostArea}) => {
  return (
    <section className={styles.postAreaContainer}>
      <form action="" className={styles.postAreaForm}>
        <div className={`${styles.headerPostAreaMobileHeader} ${styles.hiddenOnTabAndDesktop}`}>
          <MobileHeader setShowPostArea={setShowPostArea} />
          
          <button className={styles.postAreaPostBtn}>
            Post
          </button>
        </div>

        <button
          className={`${styles.closePostArea} ${styles.hiddenOnMobile}`}
          onClick={() => setShowPostArea(false)}
        >
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 21.49L10.8439 11.245L20.6878 21.49M20.6878 1L10.842 11.245L1 1" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className={styles.avatarAndTextareaContainer}>
          <div>
            <Image
              src="/profileAvatar.png"
              alt="User avatar"
              width={52}
              height={52}
              className={styles.userAvatar}
            />
          </div>

          <textarea 
            placeholder="Write something"
            className={styles.postAreaTextarea}
          />
        </div>

        <button className={styles.postAreaPostBtn}>
          Post
        </button>
      </form>

    </section>
  )
}

export default PostArea
