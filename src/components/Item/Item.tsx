import styles from './Item.module.scss';

interface Props {
  id: number;
  name: string;
  price: number;
  restaurant: string;
  rating: number;
  img_url: string;
}

const Item = ({ id, img_url, rating, name, price, restaurant }: Props) => {
  return (
    <div className={styles.Item}>
      <img className={styles.Image} src={img_url} loading="lazy" alt={name} />
      <div className={styles.Detail}>
        <div className={styles.Rating}>
          <p>{rating}</p>
          <span className={`material-icons ${styles.Star}`}>star</span>
          <span className={`material-icons ${styles.Star}`}>star</span>
          <span className={`material-icons ${styles.Star}`}>star</span>
          <span className={`material-icons ${styles.Star}`}>star</span>
          <span className={`material-icons ${styles.Star}`}>star_half</span>
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
          <button className={styles.Button}>
            <span>ADD</span>
            <span className="material-icons">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
