import form from './Form.module.scss';

const Form = () => {
  return (
    <div className={form.root}>
      <h2>Newsletter</h2>
      <div className={form.group}>
        <input type="email" name="email" placeholder="Email" required />
        {/* <label>Email</label> */}
      </div>
      <div className={form.group}>
        <div className={form.inline}>
          <input type="text" name="name" placeholder="First Name" />
          {/* <label>First Name</label> */}
        <input type="submit" className={form.btn} />
        </div>
      </div>
    </div>
  );
};

export default Form;
