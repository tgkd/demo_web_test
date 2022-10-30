import { useSession } from 'next-auth/react';
import Layout from '../components/Layout';

export default function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Layout>
        <p>You must be signed in to view this page.</p>
      </Layout>
    );
  }

  return (
    <Layout title="Profile">
      <p>{session.user.email}</p>
      <p>
        This is a protected page. You can only see this page if you are signed
      </p>
    </Layout>
  );
}
