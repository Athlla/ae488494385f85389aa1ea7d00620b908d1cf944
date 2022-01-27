import DateItem from './DateItem';
import styles from './Dates.module.scss';

const Dates = () => {
  const getDates = () => {
    let now = new Date();
    const dates = [];

    for (let i = 0; i < 14; i++) {
      dates.push({
        date: now.getDate(),
        weekday: new Date(now).toLocaleDateString('id-ID', {
          weekday: 'short',
        }),
      });

      now.setDate(now.getDate() + 1);
    }

    console.log(dates);

    return dates;
  };

  return (
    <div className={styles.Dates}>
      {getDates().map((date) => (
        <DateItem key={date.date} date={date.date} weekday={date.weekday} />
      ))}
    </div>
  );
};

export default Dates;
