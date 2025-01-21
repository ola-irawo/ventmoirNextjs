import React, { useEffect, useRef, useState } from 'react'
import styles from "./quotePostForm.module.css"
import MobileHeader from '@/components/ui/mobileHeader/MobileHeader'
import Image from 'next/image'

const QuotePostForm = ({setShowPostArea}) => {
    const [textareaScrollHeight, setTextareaScrollHeight] = useState(23)

    const textareaRef = useRef()
    const textarea = textareaRef.current
    
    const handleTextareaInput = () => {
      setTextareaScrollHeight(textarea?.scrollHeight)
    }

    useEffect(() => {
      if(textarea?.value.trim() === ''){
        console.log("no value")
        setTextareaScrollHeight(23)
      }

    }, [textareaScrollHeight])

    return (
        <section className={styles.quoteFormSection}>
          <form action="" className={styles.quoteAreaForm}>
            <div className={`${styles.headerQuoteAreaMobileHeader} ${styles.hiddenOnTabAndDesktop}`}>
              <MobileHeader setShowPostArea={setShowPostArea} />
              
              <button className={styles.quoteAreaPostBtn}>
                Post
              </button>
            </div>
    
            <button
              className={`${styles.closeQuoteArea} ${styles.hiddenOnMobile}`}
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
    
              <div>

                <textarea 
                  placeholder="Write something"
                  className={styles.quoteAreaTextarea}
                  ref={textareaRef}
                  onInput={handleTextareaInput}
                  style={{
                    height: `${textareaScrollHeight}px`,
                    maxHeight: "20rem",
                  }}
                />

                <article className={styles.userPostCardContainer}>
                  <header className={styles.userPostHeader}>

                      <div 
                          className={styles.userPostDetails}
                          onClick={() => router.push("/profile")}
                      >
                          <div className={styles.userProfileAvatarContainer}>
                              <Image
                                  src="/profileAvatar.png"
                                  alt="user avatar"
                                  width={44}
                                  height={44}
                                  className={styles.userAvatar}
                              />
                          </div>
                          
                          <div className={styles.usernameAndTimeContainer}>
                              <h2 className={styles.userPostName}>{"username"}</h2>
                              <time dateTime="" className={styles.postTime}>11:12 AM</time>
                          </div>
                      </div>

                  </header>

                  <div 
                      className={styles.postContent}
                  >
                      <p className={styles.userPost}>
                          {"post"}
                      </p>
                  </div>
                </article>

              </div>
            </div>

            <div className={styles.hiddenOnMobile}>
              <button className={styles.quoteAreaPostBtn}>
                Post
              </button>
            </div>
          </form>
    
        </section>
      )
}

export default QuotePostForm
