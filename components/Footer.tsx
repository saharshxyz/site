import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import footer from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={footer.root}>
      <h1>
        <a href="https://saharsh.tech" className={footer.name}>
          Saharsh Yeruva
        </a>
      </h1>
      <p>
        <a href="https://saharsh.tech" className={footer.username}>
          @saharshy29
        </a>{' '}
        |{' '}
        <a href="https://twitter.com/saharshy29">
          <FontAwesomeIcon
            icon={faTwitter}
            className={`${footer.icon} ${footer.twitter}`}
          />
        </a>{' '}
        <a href="https://instagram.com/saharshy29">
          <FontAwesomeIcon
            icon={faInstagram}
            className={`${footer.icon} ${footer.instagram}`}
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
