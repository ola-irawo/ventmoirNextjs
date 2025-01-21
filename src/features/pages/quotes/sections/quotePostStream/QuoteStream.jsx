
import React from 'react'
import styles from "./quoteStream.module.css"
import UserPostCard from '@/components/userPostCard/UserPostCard';

const QuoteStream = () => {
const quotes = [
    {
        id: 1,
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",
        quote: "True",
        quoteUsername: 'Aaron'
    },
    {
        id: 2,
        text: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein",
        quote: "In the middle...",
        quoteUsername: 'Janet'

    },
    {
        id: 3,
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        quote: "Yes",
        quoteUsername: 'Biyi'
    },
    ];

  return (
    <section>
      <ul className={styles.quotePostList}>
        {
          quotes.map(quotedPost => {
            return <li>
             <UserPostCard key={quotedPost.id} post={quotedPost.text} username={quotedPost.author} quote={quotedPost.quote} quoteUsername={quotedPost.quoteUsername} />
            </li>
          })
        }
      </ul>
    </section>
  )
}

export default QuoteStream
