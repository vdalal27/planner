import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../components/layout';
import Markdown from 'react-markdown';
import style from '../style/basic.css';

export default () => {
    const router = useRouter();
    return (
      <Layout>
        <div className="example">Hello World!</div>     
        <h1>{router.query.id}</h1>
        <div className="markdown">
          <Markdown
            source={`

  # Sign up and Get started!
  
  And here's the content.
        `}
          />
        </div>
        <style jsx global>{`
          .markdown {
            font-family: 'Arial';
          }
  
          .markdown a {
            text-decoration: none;
            color: blue;
          }
  
          .markdown a:hover {
            opacity: 0.6;
          }
  
          .markdown h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
        `}</style>
      </Layout>
    );
  };

