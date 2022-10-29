import Link from 'next/link';

import styles from './layout.module.css';
import Header from '../Header';

export default function Layout({ children, title }) {
  return (
    <main className={styles.container}>
      <Header />
      {children}
    </main>
  );
}
