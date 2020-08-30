import header from './Header.module.scss';
import Form from './Form';
import Featured from './Featured';

const Header = () => {
  return (
    <div className={header.root}>
      <div className={header.wrapper}>
        <h1>Thoughts.</h1>
        <Form />
      </div>
      <div className={header.wrapper}>
        <Featured />
      </div>
    </div>
  );
};

export default Header;
