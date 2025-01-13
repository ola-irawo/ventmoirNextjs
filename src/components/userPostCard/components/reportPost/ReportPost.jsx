"use client";
import React, { useState } from "react";
import styles from "./reportPost.module.css";
import BackArrow from "../../../ui/backArrow/BackArrrow"

const ReportPost = ({ postId, onReportSubmit, setReportPostOptions }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [error, setError] = useState("");

  const reasons = [
    "Spam",
    "Harassment",
    "Hate Speech",
    "Misinformation",
    "Inappropriate Content",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedReason) {
      setError("Please select a reason for reporting this post.");
      return;
    }

    const reportData = {
      postId,
      reason: selectedReason,
      details: additionalDetails,
    };

    // Call the parent function or API to submit the report
    if (onReportSubmit) {
      onReportSubmit(reportData);
    }

    // Reset state and close modal
    setSelectedReason("");
    setAdditionalDetails("");
    setIsModalOpen(false);
    setError("");
  };

  return (
    <section className={styles.reportSection}>
        <div className={styles.reportContainer}>

        <header className={styles.reportHeader}>
            {/* <div className={styles.hiddenOnTabAndDesktop}>
                <BackArrow />
            </div> */}

            <h2 className={styles.reportHeaderText}>Report Post</h2>

            {/* <div className={styles.hiddenOnMbile}> */}
                <button
                    onClick={() => setReportPostOptions(false)}
                >
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1001 16.1714L9.21258 8.7605L17.3251 16.1714M17.3251 1.34961L9.21103 8.7605L1.1001 1.34961" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            {/* </div> */}
        </header>

        <form onSubmit={handleSubmit} className={styles.reportForm}>

            <h3 className={styles.reportFormHeading}>Why are you reporting this post?</h3>

            <div className={styles.reasonsContainer}> 
                {reasons.map((reason) => (
                    <label key={reason} className={styles.reasonLabel}>
                    {reason}

                    <input
                        type="radio"
                        value={reason}
                        checked={selectedReason === reason}
                        onChange={(e) => setSelectedReason(e.target.value)}
                    />
                    </label>
                ))}
            </div>

            <div className={styles.textareaContainer}>
                <label htmlFor="details" className={styles.reasonLabel}>
                    Additional details (optional):
                </label>

                <textarea
                    id="details"
                    className={styles.detailsTextarea}
                    placeholder="Provide more information about the issue..."
                    value={additionalDetails}
                    onChange={(e) => setAdditionalDetails(e.target.value)}
                />
            </div>
            
            {error && <p className={styles.errorText}>{error}</p>}

            <button className={styles.submitButton}>
                Submit Report
            </button>
        </form>

        </div>
    </section>
  );
};

export default ReportPost;
