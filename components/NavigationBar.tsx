import styles from "../styles/NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <div className={styles.navigationBar}>
      <button>한국</button>
      <button>The United States</button>
    </div>
  );
};

export default NavigationBar;
