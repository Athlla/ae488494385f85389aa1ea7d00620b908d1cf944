import styles from './DateItem.module.scss';

interface Props {
  date: number;
  weekday: string;
}

const DateItem = ({ date, weekday }: Props) => {
  return (
    <div className={styles.DateItem}>
      <p className={styles.WeekDay}>{weekday}</p>
      <p className={styles.Date}>{date}</p>
    </div>
  );
};

export default DateItem;
