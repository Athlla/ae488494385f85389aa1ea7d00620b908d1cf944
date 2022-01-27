import Header from 'components/Header/Header';

import styles from 'styles/Home.module.scss';

const App = () => {
  return (
    <>
      <Header />
      <main className={styles.Container}></main>
    </>
  );
};

export default App;
