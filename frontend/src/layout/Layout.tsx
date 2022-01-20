import React, { FC } from 'react';
import styles from './Layout.module.css';

const Layout: FC = () => {

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>Header</header>
      <main className={styles.content}>Content</main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export default Layout;
