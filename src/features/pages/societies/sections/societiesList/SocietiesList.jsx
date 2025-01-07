import Image from 'next/image'
import React from 'react'
import styles from "./societiesList.module.css"
import Link from 'next/link'

const SocietiesList = () => {
    const societiesList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <section>

    <h2 className={styles.societiesHeader}>Societies joined</h2>

      <ul className={styles.societiesList}>
        {
            societiesList.map((list, index) => {
                return <li key={index} className={styles.societyItem}>
                    <Link href="/">
                        <div className={styles.societyImgContainer}>
                            <Image
                                src='/societyImg.png'
                                alt={`Society image`}
                                width={100}
                                height={72}
                                className={styles.societyImg}
                            />
                        </div> 
                    </Link>

                    <div className={styles.societyInfoContainer}>
                        <h3 className={styles.societyName}>Addiction</h3>
                        <p className={styles.societyMember}>34k members</p>
                    </div>
                </li>
            })
        }
      </ul>

      <h2 className={styles.otherSociety}>Other Socieites you can join.</h2>
      <ul>
      </ul>
    </section>
  )
}

export default SocietiesList
