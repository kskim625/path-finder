import type { NextPage } from 'next';
import { useState } from 'react';
import ComponentBundle from '../components/ComponentBundle';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className={styles.container}>
      <ComponentBundle date={date} holidays={[]} />
    </div>
  );
};

export default Home;
