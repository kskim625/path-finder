import Link from 'next/link';
import styles from '../styles/NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <div className={styles.navigationBar}>
      <button className={styles.button}>
        <Link href="/korea">한국</Link>
      </button>
      <button className={styles.button}>
        <Link href="/us">The United States</Link>
      </button>
    </div>
  );
};

export default NavigationBar;
