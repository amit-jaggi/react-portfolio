import style from './NeonButton.module.css';
import Resume from '../../../assets/amit-jaggi-cv.pdf';

export const ContactBtn = ({content}) => {
    return <a href="/#" className={`${style.Neon} ${style.contact}`}>{content}</a>
}

export const DownloadBtn = ({content}) => {
    return <a href={Resume} className={`${style.Neon} ${style.download}`} download="Amit Jaggi.pdf">{content}</a>
}
