import UserPostCard from '@/components/userPostCard/UserPostCard'
import React from 'react'
import styles from "./postStream.module.css"

const PostStream = () => {
    const postContent = [
        { id: 1, user: "John Doe", content: "This is my first post!" },
        { id: 2, user: "Jane Smith", content: "Loving the new platform! 😍" },
        { id: 3, user: "Samuel Lee", content: "Any tips for staying productive?" },
        { id: 4, user: "Emily Brown", content: "Had an amazing day exploring the city!" },
        { id: 5, user: "Michael Clark", content: "Here's a motivational quote for you all: 'Stay hungry, stay foolish.' - Steve Jobs" },
        { id: 6, user: "Sophia White", content: "Can’t believe it’s already the weekend. Time flies!" }
    ];
    
  return (
    <section>
        <ul className={styles.postList}>
            {
                postContent.map((post, index) => {
                    return <li key={index}>
                        <UserPostCard post={post.content} username={post.user} />
                    </li>
                })
            }
        </ul>
      
    </section>
  )
}

export default PostStream
