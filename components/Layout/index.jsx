import Link from 'next/link';

import styles from './layout.module.css';
import Header from '../Header';

export default function Layout({ children, title }) {
  return (
    <main className={styles.container}>
      <Header />
      <h2 className={styles.title}>{title}</h2>
      {children}
    </main>
  );
}
