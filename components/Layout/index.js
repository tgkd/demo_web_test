import Link from 'next/link';

import styles from './layout.module.css';

export default function Layout({ children, title }) {
  return (
    <main className={styles.container}>
      <nav>
        <ul className="nav">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="posts">Posts</Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
        </ul>
      </nav>
      {children}

      <style jsx>{`
        .container {
          padding: 1rem;
        }

        .nav {
          display: flex;
          flex-direction: row;
          column-gap: 1rem;
          padding: 0;
          list-style: none;
        }
      `}</style>
    </main>
  );
}
