import Dates from 'components/Dates/Dates';

import styles from './Header.module.scss';

interface Props {
  showModal: boolean;
  openModal: () => void;
}

const Header = ({ openModal, showModal }: Props) => {
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
    </header>
  );
};

export default Header;
