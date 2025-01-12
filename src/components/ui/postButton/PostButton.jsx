import React from 'react'
import styles from "./postButton.module.css"

const PostButton = ({setShowPostArea}) => {
  return (
    <button 
      className={styles.postBtn}
      onClick={() => setShowPostArea(true)}
    >
        <svg className={styles.hiddenOnTabAndDesktop} aria-hidden="true" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8846 1.38462C10.8846 0.61875 10.2659 0 9.5 0C8.73413 0 8.11539 0.61875 8.11539 1.38462V7.61539H1.88462C1.11875 7.61539 0.5 8.23413 0.5 9C0.5 9.76587 1.11875 10.3846 1.88462 10.3846H8.11539V16.6154C8.11539 17.3813 8.73413 18 9.5 18C10.2659 18 10.8846 17.3813 10.8846 16.6154V10.3846H17.1154C17.8813 10.3846 18.5 9.76587 18.5 9C18.5 8.23413 17.8813 7.61539 17.1154 7.61539H10.8846V1.38462Z" fill="white" fillOpacity="0.8"/>
        </svg>

        <span className={styles.btnText}>
            Post
        </span>
    </button>
  )
}

export default PostButton