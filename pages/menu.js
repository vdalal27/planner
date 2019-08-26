import Link from 'next/link';
import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';

const Menu = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Menu.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Menu;

// export default function Menu() {
//     return (
//       <div>
//         <Layout>
//         <h1>Menu</h1>
//         </Layout>
//       </div>
//     );
//   }