import styles from "./title.module.css";

const SectionMainTitle = ({ mainTitle, subTitle }) => {
  return (
    <div className={styles.sectionMainTitle}>
      <h2>{mainTitle}</h2>
      <h3>{subTitle}</h3>
    </div>
  );
};

export default SectionMainTitle;
