import { useEffect, useState } from 'react';
import HeadTag from '../components/HeadTag';
import Header from '../components/Header';
import Nav from '../components/NavigationBar';
import Calendar from '../components/Calendar';
import Footer from '../components/Footer';
import getHolidays from '../apis/holidays';
import styles from '../styles/Home.module.css';

const Korea = ({ data }: any) => {
  const [today, setToday] = useState<Date>(new Date());

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className={styles.container}>
      <HeadTag />
      <Header />
      <Nav />
      <Calendar date={today} />
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const COUNTRY_CODE: string = '&country=KR';
  const YEAR_INFO: string = '&year=2022';
  const data = await getHolidays(COUNTRY_CODE, YEAR_INFO);

  return {
    props: {
      data: data,
    },
  };
};

export default Korea;
