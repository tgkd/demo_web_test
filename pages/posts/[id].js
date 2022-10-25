import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import styles from './posts.module.css';

export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);

  return { props: { post } };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return { paths, fallback: false };
}

export default function Post({ post }) {
  return (
    <Layout>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <br />
      <span className={styles.date}>{post.date}</span>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </Layout>
  );
}
