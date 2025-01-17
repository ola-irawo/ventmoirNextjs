import React from 'react'
import styles from "./notificationsList.module.css"

const NotificationList = () => {
    const notificationList = [1, 2]
  return (
    <section>
      <ul>
        {
            notificationList.map((list, index) => {
                return <li key={index}>
                    list
                </li>
            })
        }
      </ul>
    </section>
  )
}

export default NotificationList
