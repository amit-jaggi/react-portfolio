import style from './Resume.module.css';
import profile1 from '../../image/profile1.png';
import {FaGithub} from '@react-icons/all-files/fa/FaGithub';
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin';
import {FaFacebookSquare} from '@react-icons/all-files/fa/FaFacebookSquare';
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram';
import Timeline from './Timeline/Timeline';

const handleURL = url => () => window.open(url, '_blank');

const Resume = () => {
    const career = [
        {
            careerRole: `MERN Stack Development`,
            passingYear: `Pursuing`,
            institute: `Prepbytes`
        },
        {
            careerRole: `Master in Computer Application`,
            passingYear: `2018-2020`,
            institute: `Meghnad Saha Institute of Technology`
        },
        {
            careerRole: `Bachelor in Computer Application`,
            passingYear: `2014-2017`,
            institute: `NSHM College of Management & Technology`
        }
    ]

    return (
        <div className={style.Resume} id="resume">
            <div className={style.ResumeBox}>
                <h1>Resume</h1>
                <div className={style.box}>
                    <div className={style.leftBox}>
                        <div className={style.experience}>
                            <p className={style.heading}>Skills &#38; Development</p>
                            <hr />
                            <Timeline career={career[0]} />
                        </div>
                        <div className={style.experience}>
                            <p className={style.heading}>Education</p>
                            <hr />
                            <Timeline career={career[1]} />
                            <Timeline career={career[2]} />
                        </div>

                    </div>
                    <div className={style.rightBox}>
                        <div className={style.profile}>
                            <img src={profile1} alt="Amit Jaggi" className={style.image} />
                        </div>
                        <div className={style.socialMedia}>
                            <FaGithub className={style.socialBtn} onClick={handleURL("https://github.com/amit-jaggi")} />
                            <FaLinkedin className={style.socialBtn} onClick={handleURL("https://www.linkedin.com/in/amit-jaggi-175781134/")} />
                            <FaFacebookSquare className={style.socialBtn} onClick={handleURL("https://www.facebook.com/amit.jaggi.1102/")} />
                            <FaInstagram className={style.socialBtn} onClick={handleURL("https://www.instagram.com/_amit.jaggi_/")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;