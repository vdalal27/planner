import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../components/layout';
import Markdown from 'react-markdown';

export default () => {
    const router = useRouter();
    return (
      <Layout>
        <h1>{router.query.id}</h1>
        <div className="markdown">
          <Markdown
            source={`

  ### Sign up and Get started!
  
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

// export default function Login(){
//     return(
//         <div>
//             <Layout>
//             <h1>Get Started!</h1>
//             </Layout>
//         </div>
//     );
// }
