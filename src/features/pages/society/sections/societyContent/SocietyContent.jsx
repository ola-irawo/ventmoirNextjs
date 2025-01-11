"use client";
import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./societyContent.module.css";
import SocietyPost from "./components/societyPost/SocietyPost";
import SocietyGuidance from "./components/societyGuidance/SocietyGuidance";
import SocietyResource from "./components/societyResource/SocietyResource";

const SocietyContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeFeed = searchParams.get("feed") || "posts";

  const renderActiveFeed = () => {
    switch (activeFeed) {
      case "posts":
        return <SocietyPost />;
      case "guidance":
        return <SocietyGuidance />;
      case "resource":
        return <SocietyResource />;
      default:
        return <SocietyPost />;
    }
  };

  const handleFeedChange = (feed) => {
    router.push(`?feed=${feed}`);
  };

  return (
    <section>
      <div className={styles.hiddenOnTabAndDesktop}>
        <h2 className={styles.societyName}>Parenting</h2>
      </div>

      <div className={styles.societyContentOptions}>
        <ul className={styles.societyOptionList}>
          <li className={styles.societyOptionItem}>
            <button
              className={`${styles.optionBtn} ${
                activeFeed === "posts" ? styles.activeOption : ""
              }`}
              onClick={() => handleFeedChange("posts")}
            >
              Post
            </button>
          </li>

          <li className={styles.societyOptionItem}>
            <button
              className={`${styles.optionBtn} ${
                activeFeed === "guidance" ? styles.activeOption : ""
              }`}
              onClick={() => handleFeedChange("guidance")}
            >
              Guidance
            </button>
          </li>

          <li className={styles.societyOptionItem}>
            <button
              className={`${styles.optionBtn} ${
                activeFeed === "resource" ? styles.activeOption : ""
              }`}
              onClick={() => handleFeedChange("resource")}
            >
              Resources
            </button>
          </li>
        </ul>

        <div className={styles.joinSocietyBtnContainer}>
          <button className={styles.joinSocietyBtn}>Join society</button>
        </div>
      </div>

      {renderActiveFeed()}
    </section>
  );
};

export default SocietyContent;
