import { useRouter } from 'next/router';
import Layout from '../components/layout';

const Content = () => {
    const router = useRouter();
    return (
      <>
        <h1>{router.query.title}</h1>
        <p>Random text.</p>
      </>
    );
  };
  
  const Page = () => (
    <Layout>
      <Content />
    </Layout>
  );
  
  export default Page;