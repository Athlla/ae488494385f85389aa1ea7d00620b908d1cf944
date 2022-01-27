import styles from './CartOverlay.module.scss';

const CartOverlay = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.CartOverlay}>
        <div className={styles.Col}>
          <div className={styles.Total}></div>
          <div className={styles.Icon}></div>
          <p>5 Items | Rp 125,000</p>
          <p>Termasuk ongkos kirim</p>
        </div>
        <div className={styles.Col}>
          <span className="material-icons-outlined">shopping_cart</span>
          <span className="material-icons-round">chevron_right</span>
        </div>
      </div>
    </div>
  );
};

export default CartOverlay;
