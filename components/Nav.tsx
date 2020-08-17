import nav from './Nav.module.scss';

export default function Nav() {
  return (
    <div className={nav.root}>
      <div className={nav.group}>
        <p className={nav.name}>Saharsh Yeruva</p>
        <p className={nav.username}>@saharshy29</p>
      </div>
      <div className={nav.group}>
        <p className={nav.link}>About</p>
        <p className={nav.link}>Thoughts</p>
        <p className={nav.link}>Projects</p>
        <p className={nav.link}>Story</p>
      </div>
    </div>
  );
}
