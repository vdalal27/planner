import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Login</a>
    </Link>
    <Link href="/menu">
      <a style={linkStyle}>Menu</a>
    </Link>
    <Link href="/home">
      <a style={linkStyle}>Home</a>
    </Link>
  </div>
);

export default Header;