import React, { useMemo } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

import styles from './header.module.css';

export default function Header() {
  const { data: session } = useSession();

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
            <span>Signed in as {session.user.email}</span>
            <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            <span>Not signed in</span>
            <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
      </div>
    </div>
  );
}
