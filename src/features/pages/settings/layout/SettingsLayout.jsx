import React from "react";
import styles from "./settingsLayout.module.css";
import Link from "next/link";
import ArrowSvg from "../components/ArrowSvg"

const SettingsLayout = () => {
  return (
    <section className={styles.settingsLayout}>
      <ul className={styles.settingsList} role="menu">
        <li className={styles.settingsListItem} role="menuitem" tabIndex="0">
          <Link href="/settings/account" className={styles.settingsLink}>
            Account Setting
          </Link>
          <span aria-hidden="true" className={styles.icon}>
            <ArrowSvg />
          </span>
        </li>

        <li className={styles.settingsListItem} role="menuitem" tabIndex="0">
          <Link href="/settings/profile" className={styles.settingsLink}>
            Profile Setting
          </Link>
          <span aria-hidden="true" className={styles.icon}>
            <ArrowSvg />
          </span>
        </li>

        <li className={styles.settingsListItem} role="menuitem" tabIndex="0">
          <Link href="/settings/notifications" className={styles.settingsLink}>
            Notification Setting
          </Link>
          <span aria-hidden="true" className={styles.icon}>
            <ArrowSvg />
          </span>
        </li>

        <li className={styles.settingsListItem} role="menuitem" tabIndex="0">
          <Link href="/settings/block_and_muted" className={styles.settingsLink}>
            Blocked & Muted
          </Link>
          <span aria-hidden="true" className={styles.icon}>
             <ArrowSvg />
          </span>
        </li>
      </ul>
    </section>
  );
};

export default SettingsLayout;
