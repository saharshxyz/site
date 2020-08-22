import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import footer from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={footer.root}>
      <h1>
        <Link href="/">
          <a className={footer.name}>Saharsh Yeruva</a>
        </Link>
      </h1>
      <p>
        <a href="https://srsh.link/twitter" className={footer.username}>
          @saharshy29
        </a>{' '}
        |{' '}
        <a href="https://srsh.link/github">
          <FontAwesomeIcon
            icon={faGithub}
            className={`${footer.icon} ${footer.github}`}
          />
        </a>{' '}
        <a href="https://srsh.link/instagram">
          <FontAwesomeIcon
            icon={faInstagram}
            className={`${footer.icon} ${footer.instagram}`}
          />
        </a>{' '}
        <a href="https://srsh.link/linkedin">
          <FontAwesomeIcon
            icon={faLinkedin}
            className={`${footer.icon} ${footer.linkedin}`}
          />
        </a>{' '}
        <a href="mailto:hello@saharsh.tech">
          {' '}
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`${footer.icon} ${footer.email}`}
          />{' '}
        </a>
      </p>
    </div>
  );
};

export default Footer;
