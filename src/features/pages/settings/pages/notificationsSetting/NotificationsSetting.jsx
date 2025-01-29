import React from 'react';
import styles from './notificationsSetting.module.css';

const NotificationsSetting = ({ notificationActiveState, toggleUserActivity }) => {
  const userActivities = [
    { name: "Mentions of you", value: notificationActiveState?.allowMention, activity: "mentions" },
    { name: "Comments on your posts", value: notificationActiveState?.receiveCommentNotifications, activity: "postComments" },
    { name: "Upvotes on your posts", value: notificationActiveState?.receivePostUpvoteNotifications, activity: "postUpvotes" },
    { name: "Replies to your comments", value: notificationActiveState?.receiveReplyNotifications, activity: "commentReplies" },
    { name: "Upvotes to your comments", value: notificationActiveState?.receiveCommentUpvoteNotifications, activity: "commentUpvotes" },
  ];

  return (
    <section className={styles.notificationSetting}>
      <h2 className={styles.notificationTitle}>Change notification details</h2>

      <ul className={styles.notificationSettingList} role="menu">
        {userActivities.map(activity => (
          <li key={activity.activity} className={styles.notificationListItem} role="menuitem" tabIndex="0">
            <h3 className={styles.activityName}>{activity.name}</h3>

            <button className={styles.toggleActivityBtn}>
              <svg className={styles.toggleActivityBall} aria-hidden="true" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="22" height="22" rx="11" fill="black" fillOpacity="0.62"/>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NotificationsSetting;
