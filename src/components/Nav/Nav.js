import './nav.css';

const Nav = () => {
    return (
        <section id='nav'>
            <nav className="py-2 navTop">
  <div className="container d-flex flex-wrap">
    <ul className="nav ms-auto">
      <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Home</a></li>
      <li className="nav-item"><a href="#about" className="nav-link link-dark px-2">ABOUT</a></li>
      <li className="nav-item"><a href="#contact" className="nav-link link-dark px-2">CONTACT</a></li>
    </ul>
  </div>
</nav>

        </section>
    )
}

export default Nav;