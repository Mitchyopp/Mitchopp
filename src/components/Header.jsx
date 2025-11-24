import './Header.css'
function Header({ links }) {
  return (
    <>
      <nav class="nav">
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/blog">Blogs</a>
      </nav>
    </>
  );
}
export default Header;
