import { useContext } from 'react';

import { CartContext } from 'context/cart';

import { IProduct } from 'interfaces/IProduct';
import styles from './Item.module.scss';

const Item = ({ id, img_url, rating, name, price, restaurant }: IProduct) => {
  const { add2Cart, cart } = useContext(CartContext);

  const onClickHandler = () => {
    const itemData: IProduct = {
      id,
      name,
      img_url,
      price,
      rating,
      restaurant,
    };
    add2Cart(itemData);
  };

  return (
    <div className={styles.Item}>
      <img className={styles.Image} src={img_url} loading="lazy" alt={name} />
      <div className={styles.Detail}>
        <div className={styles.Rating}>
          <p>{rating}</p>
          <span className={`material-icons-round ${styles.Star}`}>star</span>
          <span className={`material-icons-round ${styles.Star}`}>star</span>
          <span className={`material-icons-round ${styles.Star}`}>star</span>
          <span className={`material-icons-round ${styles.Star}`}>star</span>
          <span className={`material-icons-round ${styles.Star}`}>
            star_half
          </span>
        </div>
        <h4>{name}</h4>
        <div className={styles.Other}>
          <p>by Kulina</p>&bull;
          <span>{restaurant}</span>
        </div>
        <div className={styles.PricenButton}>
          <h4 className={styles.Price}>
            {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(price)}
          </h4>
          <button
            className={styles.Button}
            disabled={cart.find((item) => item.id === id) ? true : false}
            onClick={onClickHandler}
          >
            {cart.find((item) => item.id === id) ? (
              <span className="material-icons">done</span>
            ) : (
              <>
                <span>ADD</span>
                <span className="material-icons">add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
