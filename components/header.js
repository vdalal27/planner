import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/menu">
      <a style={linkStyle}>Menu</a>
    </Link>
  </div>
);

export default Header;