import Link from 'next/link';
import styles from '../styles/NavigationBar.module.css';

const NavigationBar = ({ lightMode }: { lightMode: boolean }) => {
  return (
    <div className={lightMode ? styles.navigationBar : styles.darkNavigationBar}>
      <button className={lightMode ? styles.button : styles.darkButton}>
        <Link href="/korea">한국</Link>
      </button>
      <button className={lightMode ? styles.button : styles.darkButton}>
        <Link href="/us">The United States</Link>
      </button>
    </div>
  );
};

export default NavigationBar;
