import './about.css';
import profilepic from '../../assets/profilepic.png'

const About = () => {
    return (
        <section id='about'>
            <div className="row">
                <div className= "col-6" id="aboutLeft">
                    <img src={profilepic} alt="profilePic" />
                </div>
                <div className= "col-6" id="aboutRight">
                    <h1 id="aboutTitle">ABOUT KIRTLEY</h1>
                    <p id="about"> I am a military spouse and mom of 3.
                        I am currently the Volunteer Director for a non-profit organization helping military families with medical and educational needs
                        navigate services. We advocate for change to help our families across all branches.
                        I manage all of our volunteers within the orgainzation, on-boarding of volunteers, and work closely with our CEO, Communication, and Advocacy Directors.
                        </p> 
                </div>
            </div>
        </section>
    )
}

export default About;