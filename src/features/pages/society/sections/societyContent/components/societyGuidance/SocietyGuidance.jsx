import React from 'react';
import styles from "./societyGudiance.module.css";

const SocietyGuidance = () => {
  const rules = [
    {
      id: 1,
      title: 'Use Pronouns',
      description:
        'Maintain anonymity and confidentiality by avoiding personal names in your posts. Instead, utilize pronouns such as "I," "we," "they," "them," or "him." For instance, share experiences without directly mentioning specific individuals. Example: "Returning from work today, I felt down, but support from a friend helped me through."',
    },
    {
      id: 2,
      title: 'Protect Your Privacy',
      description:
        "Please don't share personal details, contact information, or social media handles to ensure your online safety.",
    },
    {
      id: 3,
      title: 'No Political Promotion',
      description:
        'Our platform is dedicated to mental health support and discussion. Please refrain from sharing politically oriented content or promoting political agendas to maintain a safe and inclusive environment for all users.',
    },
    {
      id: 4,
      title: 'Respect and Empathy',
      description:
        "Members must show respect and empathy towards one another, recognizing that each person's experiences are unique.",
    },
    {
      id: 5,
      title: 'Non-Judgment',
      description:
        'There should be a non-judgmental and supportive atmosphere. Members should avoid criticizing or passing judgment on others.',
    },
    {
      id: 6,
      title: 'Inclusivity',
      description:
        'All individuals, regardless of their background or experiences, should be welcomed and included in the society.',
    },
    {
      id: 7,
      title: 'Constructive Sharing',
      description:
        'Members should aim to share their experiences and insights in a constructive and helpful way, focusing on personal growth and recovery.',
    },
    {
      id: 8,
      title: 'No Promotions',
      description:
        "Self-promotion or advertising unrelated to the society's purpose is generally not allowed.",
    },
    {
      id: 9,
      title: 'Mutual Support',
      description:
        'Members should offer support to those who are struggling, but they should also seek support when needed.',
    },
    {
      id: 10,
      title: 'Open-Mindedness',
      description:
        "Members should keep an open mind and be willing to learn from others' experiences, even if they differ from their own.",
    },
    {
      id: 11,
      title: 'Dispute Resolution',
      description:
        'Any conflicts or disputes should be resolved in a respectful and peaceful manner, with mediation if necessary.',
    },
    {
      id: 12,
      title: 'Safety Concerns',
      description:
        'If a member expresses thoughts of self-harm or harm to others, it should be reported to appropriate authorities.',
    },
    {
      id: 13,
      title: 'Trigger Warning',
      description:
        'Please add a trigger warning to your vent if it may trigger another person\'s anxiety. Additionally, try to limit your use of capital letters, as they may be triggering for some.',
    },
    {
      id: 14,
      title: 'Compliance with Laws',
      description:
        'All members must adhere to relevant laws and regulations. Harmful or illegal activities are not condoned.',
    },
  ];

  return (
    <section className={styles.container}>
      <article className={styles.article}>
        <h2 className={styles.header}>Guidelines</h2>
        <ul className={styles.list}>
          {rules.map((rule) => (
            <li className={styles.item} key={rule.id}>
              <p>
                <strong>{rule.id}. {rule.title}: </strong>
                {rule.description}
              </p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default SocietyGuidance;
