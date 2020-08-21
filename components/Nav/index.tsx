import styles from './index.module.scss';

export default function Nav() {
  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <p className={styles.name}>Saharsh Yeruva</p>
        <p className={styles.username}>@saharshy29</p>
      </div>
      <div className={styles.group}>
        <p className={styles.link}>About</p>
        <p className={styles.link}>Thoughts</p>
        <p className={styles.link}>Projects</p>
        <p className={styles.link}>Story</p>
      </div>
    </div>
  );
}
