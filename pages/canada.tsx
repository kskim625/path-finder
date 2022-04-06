import { useState } from 'react';
import ComponentBundle from '../components/ComponentBundle';
import getHolidays from '../apis/holidays';
import styles from '../styles/Home.module.css';

const Canada = ({ holidays }: any) => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className={styles.container}>
      <ComponentBundle date={date} holidays={holidays} />
    </div>
  );
};

export const getStaticProps = async () => {
  const COUNTRY_CODE: string = '&country=CA';
  const YEAR_INFO: string = '&year=2022';
  const data = await getHolidays(COUNTRY_CODE, YEAR_INFO);

  return data.meta.code === 200
    ? {
        props: {
          holidays: data.response.holidays,
        },
      }
    : {};
};

export default Canada;
