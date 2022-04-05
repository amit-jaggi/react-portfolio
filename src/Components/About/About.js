import style from './About.module.css';
import profile3 from '../../image/profile3.png';
import Technology from './Technology/Technology';

const About = () => {
    return (
        <div className={style.About} id="about">
            <div className={style.AboutContainer}>
                <div className={style.Content}>
                    <h1>About</h1>
                    <p>I'm a newly front-end web developer with merely some experience. Taking this profession as my most priority for not only to fulfill my pocket but also to win my heart because it has been my dream passion since my early teenage.</p>
                    <p>I'm interested in all kinds of web designing & major focus on the working of a web site. I'm truly confident to face complex problems into a creative way. Apart from all of these, you can find me in gardening or being a fitness freak.</p>
                </div>
                <div className={style.technology}>
                    <p>Languages/Library/Technology</p>
                    <div className={style.techLogo}>
                        <Technology />
                    </div>
                </div>
                <img src={profile3} alt="it's me" className={style.profile3} />
            </div>
        </div>
    );
}

export default About;