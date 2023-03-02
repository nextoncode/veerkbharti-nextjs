import styles from "./loader.module.css";

const loading = () => {
    return (
      <div className={styles.loaderConatiner}>
        <div className={styles.ldsHourglass}></div>
      </div>
    );
};

export default loading;
