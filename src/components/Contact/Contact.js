import './contact.css';

const Contact = () => {
    return (
        <section id='contact'>
            <nav className="navbarBottom">
                <div className="container-fluid contactArea" >
                    <a className="navbar-brand" id="contact" href="">Contact</a>
                    <i className="fab fa-github"></i><a class="git" href="https://github.com/kirtleyadams" target="_blank">GitHub</a>
                    <i className="fab fa-linkedin-in"></i><a class="linkedin" href="https://www.linkedin.com/in/kirtley-adams-9b0155223/">LinkedIn</a>
                    <i className="fas fa-envelope"></i><a class="email" href="mailto:hello@kirtleymichelle.com">Email</a>
                    <i className="fas fa-phone"></i><a class="phone" href="tel:+0000000000">Phone</a>
                </div>
            </nav>
        </section>
    )
}
export default Contact;