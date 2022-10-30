import React, { useMemo } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

import styles from './header.module.css';

export default function Header() {
  const { data: session } = useSession();

  const onSignoutClick = () => {
    window.confirm('Are you sure you want to sign out?') && signOut();
  };

  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="posts">Posts</Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.auth}>
        {session ? (
          <>
            <button onClick={onSignoutClick}>{session.user.name}</button>
          </>
        ) : (
          <button onClick={() => signIn()}>{'Sign in'}</button>
        )}
      </div>
    </div>
  );
}
