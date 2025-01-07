import UserPostCard from '@/components/userPostCard/UserPostCard';
import React from 'react'
import styles from "./upvoteFeed.module.css"

const UpvoteFeed = () => {
    const upvoteContent = [
        { id: 1, user: "User1", content: "This is a post about JavaScript." },
        { id: 2, user: "User2", content: "Learning React is fun and exciting!" },
        { id: 3, user: "User3", content: "What's your favorite programming language?" },
        { id: 4, user: "User4", content: "I just finished building my first project!" },
        { id: 5, user: "User5", content: "Here's a tip: Always write clean code!" }
    ];
    
  return (
    <article>
        <ul className={styles.upvoteFeedList}>
            
            {
                upvoteContent.map((post, index) => {
                return <li key={index}>
                    <UserPostCard post={post.content} username={post.user} />
                </li>
                
            })
        }
        </ul>
    </article>
  )
}

export default UpvoteFeed
