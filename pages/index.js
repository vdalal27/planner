import Link from 'next/link';
import Layout from '../components/layout';

const PostLink = props => ( //dynamic pages
    <li>
      <Link href={`/post?title=${props.title}`}> 
        <a>{props.title}</a> 
      </Link>
    </li>
); //pass data as query string parameter

export default function Home(){
    return(
        <div>
            <Layout>
            <h1>Planner</h1>
            <ul>
                <PostLink title="Breakfast" />
                <PostLink title="Lunch" />
                <PostLink title="Snack" />
                <PostLink title="Dinner" />
            </ul>
            </Layout>
        </div>
    );
}
//   export default Index;