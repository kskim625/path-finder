import type { NextPage } from 'next';
import { useState } from 'react';
import HeadTag from '../components/HeadTag';
import Header from '../components/Header';
import Nav from '../components/NavigationBar';
import Calendar from '../components/Calendar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [today, setToday] = useState<Date>(new Date());

  return (
    <div className={styles.container}>
      <HeadTag />
      <Header />
      <Nav />
      <Calendar date={today} holidays={[]} />
      <Footer />
    </div>
  );
};

export default Home;
