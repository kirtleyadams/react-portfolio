import './header.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Header = () => {
    return (
        <section id='header'>

<header className="py-3 mb-4">
  <div className="container d-flex flex-wrap">
    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
      {/* <!-- <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> --> */}
      <h2 className="titleName">KIRTLEY ADAMS</h2>
    </a>
      <ul className="nav me-auto navBottom">
      <li className="nav-item"><a href="#skills" className="nav-link link-dark px-2 active" aria-current="page">SKILLS</a></li>
      <li className="nav-item"><a href="#portfolio" className="nav-link link-dark px-2">PORTFOLIO</a></li>
      <li className="nav-item"><a href="https://docs.google.com/document/d/1VjdS6NX32xZ3l7yn5Nq0GmABUQ2LBowiXnQtBlZYCoU/edit?usp=sharing" className="nav-link link-dark px-2">RESUME</a></li>
    </ul>

    <EmailIcon className="icon" href="mailto:hello@kirtleymichelle.com" target="_blank"/>
    <GitHubIcon className="icon" href="www.github/com/kirtleyadams" target="_blank"/>
    <LinkedInIcon className="icon" href="https://www.linkedin.com/in/kirtley-adams-9b0155223/" target="_blank"/>

  </div>
</header>
        </section>
    )
}

export default Header;