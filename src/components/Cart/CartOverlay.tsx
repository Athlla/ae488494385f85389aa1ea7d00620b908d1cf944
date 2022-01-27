import { CartContext } from 'context/cart';
import { useContext } from 'react';
import styles from './CartOverlay.module.scss';

const CartOverlay = () => {
  const { cart } = useContext(CartContext);

  const active = cart.length !== 0 ? true : false;

  let totalPrice = 0;
  cart.forEach((item) => (totalPrice += item.price));

  return (
    <div
      className={`${styles.Wrapper} ${active ? styles.Active : styles.Close}`}
    >
      <div className={styles.CartOverlay}>
        <div className={styles.Col}>
          <div className={styles.Total}></div>
          <div className={styles.Icon}></div>
          <p>
            {cart.length} Items |{' '}
            {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(totalPrice)}
          </p>
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
