import './about.css';

const About = () => {
    return (
        <section id='about'>
            <div className="col-5 aboutLeft">
      {/* <img src="images/profilepic.png" id="profilePic"> */}
    </div>
    <div className="col-5 aboutRight">
      <h1 id="aboutTitle">ABOUT KIRTLEY</h1>
      <p id="about"> I am a military spouse and mom of 3. 
        I am currently the Volunteer Director for a non-profit organization helping military families with medical and educational needs
        navigate services. We advocate for change to help our families across all branches. 
        I manage all of our volunteers within the orgainzation, on-boarding of volunteers, and work closely with our CEO, Communication, and Advocacy Directors.</p>
    </div>
        </section>
    )
}

export default About;