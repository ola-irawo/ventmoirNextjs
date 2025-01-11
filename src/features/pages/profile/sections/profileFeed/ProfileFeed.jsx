"use client"
import React, { useEffect, useState } from 'react'
import styles from "./profileField.module.css"
import PostFeed from './components/postFeed/PostFeed';
import UpvoteFeed from './components/upvoteFeed/UpvoteFeed';
import DownvoteFeed from './components/downvoteFeed/DownvoteFeed';

const ProfileFeed = () => {
    const [activeFeed, setActiveFeed] = useState(() => {
        return localStorage.getItem('activeFeed') || 'posts';
    });

      const handleActiveFeed = (activeFeed) => {
        setActiveFeed(activeFeed)
      }
  
      const renderActiveFeed = () => {
        switch(activeFeed){
          case "posts":
            return <PostFeed  />
          case "upvotes":
            return <UpvoteFeed />
          case "downvotes":
            return <DownvoteFeed />
          default:
            return "Posts"
        }
      }
  
      useEffect(() => {

        localStorage.setItem('activeFeed', activeFeed);
      }, [activeFeed]);
  
  return (
    <section className={styles.profileFeedSection}>
        <div className={styles.profileFeedOptionsContainer}>
            <ul className={styles.profileFeedList}>
                <li className={styles.profileFeedItem}>
                  <button 
                    className={`${styles.profileFeedBtn} ${activeFeed === "posts" ? styles.activeFeed : ""}`}
                    onClick={() => setActiveFeed("posts")}
                  >Post</button>
                </li>

                <li  className={styles.profileFeedItem}>
                  <button 
                    className={`${styles.profileFeedBtn} ${activeFeed === "upvotes" ? styles.activeFeed : ""}`}
                    onClick={() => setActiveFeed("upvotes")}
                  >Upvote</button>
                </li>

                <li  className={styles.profileFeedItem}>
                  <button 
                    className={`${styles.profileFeedBtn} ${activeFeed === "downvotes" ? styles.activeFeed : ""}`}
                    onClick={() => setActiveFeed("downvotes")}
                  >Downvote</button>
                </li>
            </ul>
        </div>

      {renderActiveFeed()}
    </section>
  )
}

export default ProfileFeed
