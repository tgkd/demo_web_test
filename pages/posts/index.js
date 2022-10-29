import Link from 'next/link';

import Layout from '../../components/Layout';
import { getSortedPostsData } from '../../lib/posts';
import styles from './posts.module.css';

export async function getStaticProps() {
  const posts = getSortedPostsData();

  return { props: { posts } };
}

export default function Posts({ posts }) {
  return (
    <Layout title={'Posts'}>
      <ol>
        {posts.map(({ id, date, title }) => (
          <li className={styles.row} key={id}>
            <Link href={`posts/${id}`}>
              {title}
            </Link>
            <br />
            <span className={styles.date}>{date}</span>
          </li>
        ))}
      </ol>
    </Layout>
  );
}
