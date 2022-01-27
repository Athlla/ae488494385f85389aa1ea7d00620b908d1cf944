import CartOverlay from 'components/Cart/CartOverlay';
import Header from 'components/Header/Header';
import Modal from 'components/Modal/Modal';
import Item from 'components/Item/Item';

import { IProduct } from 'interfaces/IProduct';

import styles from 'styles/Home.module.scss';
import { useState } from 'react';

const ITEM_DATA: IProduct[] = [
  {
    id: 1,
    name: 'Dori Asam Manis dan Capcay Goreng',
    price: 35000,
    restaurant: 'Uptown Lunch',
    rating: 4.5,
    img_url:
      'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_01.jpg',
  },
  {
    id: 2,
    name: 'Chicken Bolognese Penne sauteed',
    price: 35000,
    restaurant: 'Uptown Lunch',
    rating: 4.5,
    img_url:
      'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_30_04.jpg',
  },
  {
    id: 3,
    name: 'Seafood kani mentai rice',
    price: 35000,
    restaurant: 'Uptown Lunch',
    rating: 4.5,
    img_url:
      'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_02.jpg',
  },
  {
    id: 4,
    name: 'Spaghetti Bolognese',
    price: 35000,
    restaurant: 'Uptown Lunch',
    rating: 4.5,
    img_url:
      'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_04.jpg',
  },
  {
    id: 5,
    name: 'Penne-Pasta Chicken Presto',
    price: 35000,
    restaurant: 'Uptown Lunch',
    rating: 4.5,
    img_url:
      'https://assets.kulina.id/kulina-assets/web/images/menus-new-user/menu_40_03.jpg',
  },
];

const App = () => {
  const [tab, setTab] = useState<'Lunch' | 'Dinner'>('Lunch');
  const [showModal, setShowModal] = useState<boolean>(false);

  const currDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <Header openModal={() => setShowModal(true)} tab={tab} setTab={setTab} />
      <main className={styles.Container}>
        <p className={styles.CurrDate}>{currDate}</p>
        <div className={styles.Items}>
          {ITEM_DATA.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
        <CartOverlay />
        <Modal showModal={showModal} closeModal={() => setShowModal(false)} />
      </main>
    </>
  );
};

export default App;
