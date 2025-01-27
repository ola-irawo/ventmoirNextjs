import React, { useRef, useState } from "react";
import styles from "./commentTextarea.module.css";
import Image from "next/image";

const CommentTextarea = () => {
  const [textareaScrollHeight, setTextareaScrollHeight] = useState(23); // Default height
  const textareaRef = useRef();

  const handleTextareaChange = () => {
    const commentTextarea = textareaRef.current;

    if (commentTextarea) {
      if (commentTextarea.value.trim() === "") {
        setTextareaScrollHeight(23); // Reset to default height when empty
      } else {
        setTextareaScrollHeight(commentTextarea.scrollHeight); // Adjust height dynamically
      }
    }
  };

  return (
    <form className={styles.commentForm}>
      <div className={styles.commentFormContainer}>
        <div className={styles.commentUserAvatarContainer}>
          <Image
            src="/profileAvatar.png"
            alt="user avatar"
            width={40}
            height={40}
            className={styles.commentUserAvatar}
          />
        </div>

        <div className={styles.textareaAndBtnContainer}>
          <textarea
            name="comment"
            ref={textareaRef}
            placeholder="Post your thoughts"
            className={styles.commentFormTextarea}
            onInput={handleTextareaChange}
            style={{
              height: `${textareaScrollHeight}px`,
            }}
          />

          <div
            className={styles.commentBtnContainer}
            style={{ gridTemplateColumns: true && "1fr 1fr" }}
          >
            <button
              className={styles.commentCancelBtn}
              type="button"
            >
              Cancel
            </button>

            <button className={styles.commentFormBtn}>Post</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CommentTextarea;
