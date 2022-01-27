import Dates from 'components/Dates/Dates';
import useScroll from 'hooks/useScroll';

import styles from './Header.module.scss';

interface Props {
  openModal: () => void;
  tab: 'Lunch' | 'Dinner';
  setTab: (value: 'Lunch' | 'Dinner') => void;
}

const Header = ({ openModal, setTab, tab }: Props) => {
  const show = useScroll();

  return (
    <header className={styles.Header}>
      <div className={styles.Row}>
        <span className={`material-icons ${styles.Back}`}>west</span>
        <div className={styles.Location}>
          <p>ALAMAT PENGIRIMAN</p>
          <span className={styles.LocationItem} onClick={openModal}>
            <h3>Tokopedia Tower</h3>
            <span className={`material-icons ${styles.ArrowDownIcon}`}>
              expand_more
            </span>
          </span>
        </div>
      </div>
      <Dates />
      {show && (
        <div className={styles.Tab}>
          <span
            className={`${styles.Item} ${tab === 'Lunch' ? styles.Active : ''}`}
            onClick={() => setTab('Lunch')}
          >
            Lunch
          </span>
          <span
            className={`${styles.Item} ${
              tab === 'Dinner' ? styles.Active : ''
            }`}
            onClick={() => setTab('Dinner')}
          >
            Dinner
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
