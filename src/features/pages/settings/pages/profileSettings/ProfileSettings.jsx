import React from 'react'
import styles from "./profileSettings.module.css"
import Button from '../../components/button/Button'

const ProfileSettings = () => {
  return (
    <section>
        <form>

            <section className={styles.accountSettingsWrapper}>

                <div className={styles.inputContainer}>
                    <h3 className={styles.accountSettingsHead}>Change Profile Details</h3>

                    <div className={styles.accountSettingsInputContainer}>
                        <label className={styles.accountSettingsLabel}>
                            Display Name
                        </label>
                        <input
                            type="text"
                            placeholder="Username"
                            className={styles.accountSettingsInput}
                        />
                    </div>
                </div>

            </section>

            <Button />
        </form>
    </section>

  )
}

export default ProfileSettings
