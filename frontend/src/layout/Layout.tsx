import React, { FC } from 'react';
import styles from './Layout.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout: FC = () => {

  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <main className={styles.content}>Content</main>
      <Footer className={styles.footer} />
    </div>
  );
}

export default Layout;
