import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
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
          <FaGithub className={`${footer.icon} ${footer.github}`} />
        </a>{' '}
        <a href="https://srsh.link/instagram">
          <FaInstagram className={`${footer.icon} ${footer.instagram}`} />
        </a>{' '}
        <a href="https://srsh.link/linkedin">
          <FaLinkedin className={`${footer.icon} ${footer.linkedin}`} />
        </a>{' '}
        <a href="mailto:hello@saharsh.tech">
          {' '}
          <FaEnvelope className={`${footer.icon} ${footer.email}`} />{' '}
        </a>
      </p>
      <p className={footer.credits}>
        Design inspiration from <a href="https://thesephist.com">Linus</a>
      </p>
    </div>
  );
};

export default Footer;
