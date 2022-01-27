import Search from 'components/SearchBox/Search';
import { useState } from 'react';
import styles from './Modal.module.scss';

const DUMMY_LOCATION = [
  {
    id: 1,
    name: 'Kulina',
    address: 'Jalan Tulodong Atas 28, Senayan, Kebayoran Baru, DKI Jakarta',
  },
  {
    id: 2,
    name: 'Pancoran Riverside Appartement',
    address: 'RT6/RW1, Pengadegan, Pancoran, South Jakarta, DKI Jakarta',
  },
  {
    id: 3,
    name: 'Jalan tulodong Atas 28',
    address: 'RT6/RW1, Pengadegan, Pancoran, South Jakarta, DKI Jakarta',
  },
  {
    id: 4,
    name: 'Block71 Jakarta',
    address:
      'Ariobimo Sentral, South Jakarta, RT9/RW4, East Jakarta, DKI Jakarta',
  },
];

interface Props {
  showModal: boolean;
  closeModal: () => void;
}

const Modal = ({ showModal, closeModal }: Props) => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <div
        className={`${styles.Backdrop} ${
          showModal ? styles.Active : styles.Close
        }`}
        onClick={closeModal}
      />
      <div
        className={`${styles.Modal} ${
          showModal ? styles.Active : styles.Close
        }`}
      >
        <span
          onClick={closeModal}
          className={`material-icons-round ${styles.CloseIcon}`}
        >
          close
        </span>
        <h2>Cek makanan yang tersedia di lokasi kamu!</h2>
        <Search value={value} onChange={setValue} />
        <div className={styles.LocationResults}>
          {value.length >= 3 &&
            DUMMY_LOCATION.map((item) => (
              <div key={item.id} className={styles.LocationItem}>
                <span className="material-icons">place</span>
                <div className={styles.Detail}>
                  <p className={styles.LocationName}>{item.name}</p>
                  <p className={styles.Address}>{item.address}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Modal;
