"use client"
import React, { useState } from 'react'
import styles from "./postDetails.module.css"
import BookmarkPost from '@/components/userPostCard/components/bookmarkPost/BookmarkPost'
import DownvotePost from '@/components/userPostCard/components/downvotePost/DownvotePost'
import PostComment from '@/components/userPostCard/components/postComment/PostComment'
import ReportPost from '@/components/userPostCard/components/reportPost/ReportPost'
import Repost from '@/components/userPostCard/components/repost/Repost'
import SharePost from '@/components/userPostCard/components/sharePost/SharePost'
import UpvotePost from '@/components/userPostCard/components/upvotePost/UpvotePost'
import CommentTextarea from "../../../../../components/comment/commentTextarea/CommentTextarea"
import UserCommentCard from "../../../../../components/comment/userCommentCard/UserCommentCard"
import PostOptions from '@/components/userPostCard/components/postOptions/PostOptions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const PostDetails = () => {
  const [showPostOptions, setShowPostOptions] = useState(false)
  const [reportPostOption, setReportPostOptions] = useState(false)
  
  const router = useRouter()

  const postDetails = {
    id: 1,
    user: "John Doe",
    post: "This is my first post!",
    comments: [
      {
        id: 1,
        user: "Jane Smith",
        content: "Congratulations on your first post!",
      },
      {
        id: 2,
        user: "Alice Johnson",
        content: "Excited to see more posts from you!",
      },
      {
        id: 3,
        user: "Mark Brown",
        content: "Great start, John!",
      },
    ],
  };
  

  return (
    <article className={styles.postDetailsContainer}>
      {reportPostOption && <ReportPost setReportPostOptions={setReportPostOptions} />}
      
      <div className={styles.parentPostContainer}>

        <header className={styles.postDetailsHeader}>

          <div className={styles.userPostDetails}>
            
            <div 
              className={styles.postDetailsAvatarContainer}
              onClick={() => router.push("/profile")}
            >
              <Image
                src="/profileAvatar.png"
                alt="user avatar"
                width={44}
                height={44}
                className={styles.userAvatar}
              />
            </div>
            
            <div className={styles.usernameAndTimeContainer}>
                <h2 
                  className={styles.userPostName}
                  onClick={() => router.push("/profile")}
                >{postDetails.user}</h2>
                <time dateTime="" className={styles.postTime}>11:12 AM</time>
            </div>
          </div>

          <div>
            <button 
              className={styles.postDeailsOption}
              onClick={() => setShowPostOptions(true)}
            >
              <svg aria-hidden="true" width="4" height="21" viewBox="0 0 4 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 1.99936C4.00008 2.262 3.94844 2.52209 3.848 2.76477C3.74757 3.00746 3.60032 3.22798 3.41467 3.41376C3.22901 3.59954 3.00858 3.74693 2.76596 3.84751C2.52334 3.9481 2.26329 3.99992 2.00064 4C1.738 4.00008 1.47791 3.94844 1.23523 3.84801C0.992543 3.74757 0.772017 3.60033 0.58624 3.41467C0.400464 3.22901 0.253075 3.00858 0.152488 2.76596C0.0519002 2.52334 8.44678e-05 2.26329 1.03327e-07 2.00064C-0.000170278 1.47021 0.21038 0.961434 0.585332 0.586241C0.960285 0.211048 1.46892 0.000170708 1.99936 4.76837e-07C2.52979 -0.000169754 3.03857 0.210379 3.41376 0.585331C3.78895 0.960284 3.99983 1.46892 4 1.99936Z" fill="#939393"/>
                <path d="M4 10.2637C4 9.1591 3.10457 8.26367 2 8.26367C0.89543 8.26367 0 9.1591 0 10.2637C0 11.3682 0.89543 12.2637 2 12.2637C3.10457 12.2637 4 11.3682 4 10.2637Z" fill="#939393"/>
                <path d="M4.00391 18.5313C4.00391 17.4267 3.10848 16.5312 2.00391 16.5312C0.899337 16.5312 0.00390625 17.4267 0.00390625 18.5313C0.00390625 19.6358 0.899337 20.5312 2.00391 20.5312C3.10848 20.5312 4.00391 19.6358 4.00391 18.5313Z" fill="#939393"/>
              </svg>
            </button>
            {showPostOptions && <PostOptions setReportPostOptions={setReportPostOptions} setShowPostOptions={setShowPostOptions} />}
          </div>
        </header>

        <div>
          <p className={styles.userPost}>
            {postDetails.post}
          </p>
        </div>
        

        <div className={styles.postDetailsInteractionContainer}>
          <UpvotePost />
          <DownvotePost />
          <PostComment />
          <Repost />
          <SharePost />
          <BookmarkPost />
        </div>
      </div>

     <CommentTextarea />

      {
        postDetails.comments 
          &&
        postDetails.comments.map(comment => {
          return <UserCommentCard key={comment.id} comment={comment} router={router}/>
        })
      }
    </article>
  )
}


export default PostDetails
