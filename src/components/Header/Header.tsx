import Dates from 'components/Dates/Dates';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Row}>
        <span className={`material-icons ${styles.Back}`}>west</span>
        <div className={styles.Location}>
          <p>ALAMAT PENGIRIMAN</p>
          <span>
            <h3>Tokopedia Tower</h3>
            <span className={`material-icons ${styles.ArrowDownIcon}`}>
              expand_more
            </span>
          </span>
        </div>
      </div>
      <Dates />
    </header>
  );
};

export default Header;
