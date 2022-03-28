import { useEffect, useState } from 'react';
import styles from '../styles/Calendar.module.css';

const Calendar = ({ date }: { date: Date }) => {
  const [thisCalendar, setThisCalendar] = useState<JSX.Element>(<></>);
  const daysInAWeek: number = 7;

  const drawCalendarEl = (calEl: string, j: number) => {
    const today: Date = new Date();
    const isToday: boolean = today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth() && today.getDate() === Number(calEl);
    return isToday ? (
      <div className={styles.calendarContentToday} key={`calendarEl-${j}`}>
        {calEl}
      </div>
    ) : (
      <div className={styles.calendarContent} key={`calendarEl-${j}`}>
        {calEl}
      </div>
    );
  };

  const drawCalendarRow = (calendarRow: string[], i: number) => {
    return (
      <div className={styles.calendarRow} key={`calendar-${i}`}>
        {calendarRow.map((calEl, j) => {
          return drawCalendarEl(calEl, j);
        })}
      </div>
    );
  };

  const drawCalendar = (calendarArray: string[][]) => {
    setThisCalendar(
      <>
        {calendarArray.map((calendarRow, i) => {
          return drawCalendarRow(calendarRow, i);
        })}
      </>
    );
  };

  const setCalendarRow = (year: number, month: number, date: number, lastDate: number) => {
    const firstDay: number = new Date(year, month, 1).getDay();
    const thisRow: string[] = date === 1 ? new Array(firstDay).fill('') : [];
    while (thisRow.length < daysInAWeek && date <= lastDate) {
      thisRow.push(String(date));
      date += 1;
    }
    while (thisRow.length < daysInAWeek) {
      thisRow.push('');
    }
    return thisRow;
  };

  const makeCalendar = (year: number, month: number) => {
    const lastDate = new Date(year, month + 1, 0).getDate();
    const calendarRows = [['일', '월', '화', '수', '목', '금', '토']];
    const firstRow = setCalendarRow(year, month, 1, lastDate);
    calendarRows.push(firstRow);
    let currentDate =
      daysInAWeek -
      firstRow.filter((str) => {
        return str === '';
      }).length;
    while (currentDate < lastDate) {
      calendarRows.push(setCalendarRow(year, month, currentDate, lastDate));
      currentDate += daysInAWeek;
    }
    return calendarRows;
  };

  const setCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    drawCalendar(makeCalendar(year, month));
  };

  useEffect(() => {
    setCalendar();
  }, []);

  return (
    <div className={styles.calendarWrapper}>
      {`${date.getFullYear()}년 ${date.getMonth() + 1}월`}
      {thisCalendar}
    </div>
  );
};

export default Calendar;
