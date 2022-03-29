import resume from '../../assets/resume.pdf';

const Resume = () => {
    return (
        <div className='resume'>
            <a href={resume} download >resume</a>
        </div>
    )
}

export default Resume;