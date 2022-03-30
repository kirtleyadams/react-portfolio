import './skills.css';

const Skills = () => {
    return (
        <section id='skills'>
            <div className="row" id="skills">
                <div className="skills">
                    <div className="row">
                        <div className="skillTitle">SKILLS</div>
                        <div className="col" id="left">
                            <h5>HTML</h5>
                            <br/>
                            <h5>CSS</h5>
                            <br/>
                            <h5>JAVASCRIPT</h5>
                            <br/>
                            <h5>MONGODB</h5>
                        </div>
                        <div class="col" id="right">
                            <h5>MYSQL</h5>
                            <br/>
                            <h5>EXPRESS</h5>
                            <br/>
                            <h5>NODE.JS</h5>
                            <br/>
                            <h5>REACT</h5>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

 export default Skills;