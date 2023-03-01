import styles from "./progress.module.css";

const ProgressBar = ({ title, progress }) => {
  return (
    <div className={styles.progressContainer}>
      <div className="row">
        <div className="col-3">
          <p>{title}</p>
        </div>
        <div className="col-9">
          <div className={styles.progressBar}>
            <div
              className={`${styles.progressNumber}`}
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
