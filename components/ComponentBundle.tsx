import { useState, useEffect } from 'react';
import HeadTag from './HeadTag';
import Header from './Header';
import Nav from './NavigationBar';
import Calendar from './Calendar';
import Footer from './Footer';
import styles from '../styles/Home.module.css';

const ComponentBundle = ({ date, holidays }: { date: Date; holidays: any }) => {
  const [lightMode, setLightMode] = useState<boolean>(true);
  const DARK_MODE_CLASS_NAME = 'darkMode';

  const toggleDarkMode = () => {
    document.body.classList.toggle(DARK_MODE_CLASS_NAME);
  };

  useEffect(() => {
    toggleDarkMode();
  }, []);

  useEffect(() => {
    toggleDarkMode();
  }, [lightMode]);

  return (
    <div className={styles.container}>
      <HeadTag />
      <Header lightMode={lightMode} setLightMode={setLightMode} />
      <Nav lightMode={lightMode} />
      <Calendar lightMode={lightMode} date={date} holidays={holidays} />
      <Footer />
    </div>
  );
};

export default ComponentBundle;
