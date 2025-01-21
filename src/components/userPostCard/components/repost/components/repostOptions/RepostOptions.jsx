import React from 'react'
import styles from "./repostOptions.module.css"

const RepostOptions = ({setRepostOptions, setShowPostArea}) => {
    const repostOptions  = [
        {label: "Share post"},
        {label: "Share your thoughts"}
    ]

    const handleOptionClick = (option) => {
        if(!navigator.onLine){
            return
        }

        switch(option.label){
            case "Share post":
                console.log("Sharing post")
            break;
            case "Share your thoughts":
                console.log("Sharing your thoughts")
                setShowPostArea(true)
            break;
            default:
                console.log("Sharing post")
        }
    }
    return (
        <aside className={styles.postOptionsContainer} onClick={() => setRepostOptions(false)}>
            <div className={styles.postOptionsWrapper}>
              <ul className={styles.postOptionList}>
                {
                  repostOptions.map((option, index) => {
                      return <li key={index}>
                          <button className={styles.optionLabel} onClick={() => handleOptionClick(option)}>
                            {option.label}
                          </button>
                      </li>
                  })
                }
              </ul>
          </div>
    
        </aside>
  )
}

export default RepostOptions
