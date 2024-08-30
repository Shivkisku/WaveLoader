// components/LoadingWave.js
import styles from './LoadingWave.module.css';

const LoadingWave = () => {
  return (
    <div className={styles.loadingWave}>
      <div className={styles.loadingBar}></div>
      <div className={styles.loadingBar}></div>
      <div className={styles.loadingBar}></div>
      <div className={styles.loadingBar}></div>
    </div>
  );
};

export default LoadingWave;
