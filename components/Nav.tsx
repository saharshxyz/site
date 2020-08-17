import styles from './nav.module.scss';

export default function Nav() {
  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <p>Saharsh Yeruva</p>
        <p>@saharshy29</p>
      </div>
      <div className={styles.group}>
        <p className={styles.link}>About</p>
        <p className={styles.link}>Projects</p>
        <p className={styles.link}>Blog</p>
      </div>
    </div>
  );
}
