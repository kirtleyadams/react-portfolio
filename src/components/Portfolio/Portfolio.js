import './portfolio.css';
import famyouly from '../../assets/famyouly.png';
import notetaker from '../../assets/notetaker.png';
import puppylove from '../../assets/puppylove.png';
import wordkdayscheduler from '../../assets/workdayscheduler.png';
import techblog from '../../assets/techblog.png';

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <div className="row" id="portfolio">
                <div className="col" id="project1">
                    <img src={famyouly} id="projectLeft"/>
                        <button type="button" className="btn btn p3b justify-content-center" id="famyouly"><a href="https://github.com/EsotericZ/famYOUly" target="_blank"> FAMYOULY </a></button>
                </div>
                <div className="col" id="project2">
                    <img src={notetaker} id="projectRight"/>
                        <button type="button" className="btn btn p3b" id="noteTaker"><a href="https://github.com/kirtleyadams/note-taker" target="_blank"> NOTE TAKER </a></button>
                </div>
            </div>
            <div className="row">
                <div className="col" id="project3">
                    <img src={puppylove} id="bottomLeft"/>
                        <button type="button" className="btn btn p3b" id="puppyLove"><a href="https://github.com/EsotericZ/project01" target="_blank"> PUPPY LOVE </a></button>
                </div>
                <div className="col" id="project4">
                    <img src={wordkdayscheduler} id="bottomMiddle"/>
                        <button type="button" className="btn btn p3b" id="scheduler"><a href="https://github.com/kirtleyadams/Week-05/" target="_blank"> WORKDAY SCHEDULER </a></button>
                </div>
                <div className="col" id="project5">
                    <img src={techblog} id="bottomRight"/>
                        <button type="button" className="btn btn p3b" id="techblog"><a href="https://github.com/kirtleyadams/tech-blog" target="_blank"> TECH BLOG </a></button>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;