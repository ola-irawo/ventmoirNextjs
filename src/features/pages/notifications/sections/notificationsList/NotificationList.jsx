import React from "react";
import styles from "./notificationsList.module.css";
import Image from "next/image";

const NotificationList = () => {
  const userNotification = [1, 2,3,4,5,6,7,8,9,10]; // Placeholder for notifications array

  return (
    <section className={styles.notificationList}>
      <ul>
        {userNotification?.map((alert, index) => (
          <li
            key={alert._id || index} // Add a fallback key if _id is not available
            className={styles.notificationListItem}
            aria-posinset={index + 1}
            aria-setsize={userNotification.length}
            tabIndex="0"
          >
            <div className={styles.notificationDetails}>
              <div className={styles.notification}>
                <a
                  className={styles.notificationImgContainer}
                  aria-label={`View profile of ${alert.actionUserId?.username}`}
                >
                  <Image
                    className={styles.notificationImg}
                    src={"/profileAvatar.png"}
                    alt={`user's profile avatar`}
                    width={40}
                    height={40}
                  />
                </a>

                <div>
                  <div
                    className={styles.notificationActionType}
                  >
                    <h4>
                      {alert?.actionUserId?.username || "Lily "}
                      {/* <span
                      >
                        {alert?.type === "mention"
                          ? " mentioned"
                          : " " + alert?.type}{" "}
                        {alert?.type === "mention"
                          ? alert?.commentId
                            ? "you in a comment"
                            : " you in a post"
                          : alert?.type === "post" || alert?.type === "comment"
                          ? "on your"
                          : "your"}
                        {alert?.type === "mention"
                          ? ""
                          : alert?.commentId
                          ? " comment"
                          : " post"}
                      </span> */}
                       like your post
                    </h4>
                  </div>

                  <p
                    className={styles.notificationContent}
                  >
                    In everything we do in life we should try to be..
                    {/* {alert?.commentId?.comment &&
                    alert?.commentId?.comment.length > 100
                      ? alert?.commentId?.comment.slice(0, 100) + " ...see more"
                      : alert?.postId?.post && alert.postId?.post.length > 100
                      ? alert?.postId?.post.slice(0, 100) + " ...see more"
                      : alert?.commentId?.comment || alert?.postId?.post} */}
                  </p>
                </div>
              </div>

                <div>
                  <small className={styles.notificationTimestamp}>
                    {alert?.createdAt || "02:34 pm"}
                  </small>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NotificationList;
