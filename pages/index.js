import Link from 'next/link';
import Layout from '../components/layout';

const PostLink = props => ( //dynamic pages
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}> 
        <a>{props.id}</a> 
      </Link>
    </li>
); //pass data as query string parameter

export default function Home(){
    return(
        <div>
            <Layout>
            <h1>Planner</h1>
            <ul>
                <PostLink id="Breakfast" />
                <PostLink id="Lunch" />
                <PostLink id="Snack" />
                <PostLink id="Dinner" />
            </ul>
            </Layout>
        </div>
    );
}
//   export default Index;