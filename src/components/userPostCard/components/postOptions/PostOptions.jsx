import React, { useState } from 'react'
import styles from "./postOptions.module.css"

const PostOptions = ({setShowPostOptions}) => {
    const [options, setOptions] = useState(null)

    const postOptions = [
        {label: `Copy Link`, action:  () =>  console.log("link")},
        {label: `${"isbookmark" ? "Remove bookmark" : "Bookmark"}`, action:  () =>  console.log("link")},
        {label: `Mute @${"username"}`, action:  () =>  console.log("mute")},
        {label: `Block @${"username"}`, action: () =>  console.log("block")},
        {label: `Report @${"username"}`, action:() => console.log("report user")},
        {label: `Report post`, action:() => console.log("report post")},
        // userUid && {label: `Delete post`, action:() => console.log("report")},
        // userUid && {label: `Edit post`, action:() => console.log("report")},
    ]

    const handleOptionClick = (option) => {
        if(!navigator.onLine){
          return
        }
        let options;
    
        switch (option.label) {
          case 'Copy Link':
            console.log("copy post")
            const postUrl = `${window.location.host}/post/${username}/${postId}`
            navigator.clipboard.writeText(postUrl)
            // Create a hidden input element
            const input = document.createElement('input');
            input.style.position = 'fixed';
            input.style.opacity = 0;
            input.value = postUrl;
            document.body.appendChild(input);
    
            // Select and copy the text from the input
            input.select();
            document.execCommand('copy');
            // Remove the input from the DOM
            document.body.removeChild(input);

            break;
          case `${"isbookmark" ? "Remove bookmark" : "Bookmark"}`:
            console.log("bookmark post")
            break;
          case `Mute @${"username"}`:
            console.log("mute user")
            break;
          case `Block @${"username"}`:
            console.log("Block")
          case `Report @${"username"}`:
            console.log("report post")
            break;
          case 'Delete post':
            console.log("delete post")
            break;
          case "Report post":
            console.log("report post")
            break;
          case "Edit post":
            console.log("edit post")
            break;
          default:
            break;
        }
    };
    
    
  return (
    <aside className={styles.postOptionsContainer} onClick={() => setShowPostOptions(false)}>
        <div className={styles.postOptionsWrapper}>
            <ul className={styles.postOptionList}>
                {
                    postOptions.map((option, index) => {
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

export default PostOptions
