import React, { useState } from 'react'
import QuotePostForm from "./components/quotePostForm/QuotePostForm"
import RepostOptions from './components/repostOptions/RepostOptions'

const Repost = ({}) => {
    const [repostOption, setRepostOptions] = useState(false)
    const [showPostArea, setShowPostArea] = useState(false)
      
  
  return (
    <>
      {showPostArea && <QuotePostForm setShowPostArea={setShowPostArea} />}
      {repostOption && <RepostOptions setShowPostArea={setShowPostArea} setRepostOptions={setRepostOptions} />}
      <button onClick={() => setRepostOptions(true)}>
        <svg aria-hidden="true" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9446 4.74917C11.3618 4.19107 10.6692 3.74845 9.90662 3.44675C9.14402 3.14506 8.32646 2.99025 7.50095 2.99122C5.83384 2.99142 4.23506 3.62366 3.05623 4.7489C1.87741 5.87414 1.21505 7.40023 1.21484 8.99156C1.21505 10.5836 1.87715 12.1105 3.05575 13.2369C4.23435 14.3633 5.83311 14.9973 7.50095 14.9995C9.16893 14.9973 10.7678 14.3632 11.9464 13.2366C13.1251 12.11 13.7871 10.583 13.7871 8.9908" stroke="black" strokeMiterlimit="10" strokeLinecap="round"/>
          <path d="M11.3723 1.00098L12.1254 3.92055C12.1923 4.17934 12.1488 4.45288 12.0047 4.68115C11.8605 4.90942 11.6274 5.07378 11.3564 5.13818L8.28906 5.85559" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </>
  )
}

export default Repost
