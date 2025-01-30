import React from 'react'
import styles from "./accountSetting.module.css"
import Button from '../../components/button/Button'

const AccountSettings = () => {
  return (
    <section>
        <form>
            <section className={styles.accountSettingsWrapper}>
                <h3 className={styles.accountSettingsHead}>Change login details</h3>

                <div className={styles.inputContainer}>
                    
                    <div className={styles.accountSettingsInputContainer}>
                    <label className={styles.accountSettingsLabel}>
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="Enter new email address"
                        className={styles.accountSettingsInput}
                    />
                    </div>

                    <div className={styles.accountSettingsInputContainer}>
                        <label className={styles.accountSettingsLabel}>
                            Former Password
                        </label>
                        <input
                            type="email"
                            placeholder="Former Password"
                            className={styles.accountSettingsInput}
                        />
                    </div>

                    <div className={styles.accountSettingsInputContainer}>
                        <label className={styles.accountSettingsLabel}>
                            New Password
                        </label>
                        <input
                            type="passowrd"
                            placeholder="New Password"
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

export default AccountSettings
