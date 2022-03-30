import './contact.css';

const Contact = () => {
    return (
        <section id='contact'>
            <nav className="navbarBottom">
                <div className="container-fluid contactArea" >
                    <a className="navbar-brand" id="contact" href="">Contact</a>
                    <i className="fab fa-github"></i><a id="git" href="https://github.com/kirtleyadams" target="_blank">GitHub</a>
                    <i className="fab fa-linkedin-in"></i><a id="linkedin" href="https://www.linkedin.com/in/kirtley-adams-9b0155223/">LinkedIn</a>
                    <i className="fas fa-envelope"></i><a id="email" href="mailto:hello@kirtleymichelle.com">Email</a>
                    <i className="fas fa-phone"></i><a id="phone" href="tel:+0000000000">Phone</a>
                </div>
            </nav>
        </section>
    )
}
export default Contact;