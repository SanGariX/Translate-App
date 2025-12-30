import s from "./footer.module.scss";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <h1 className={s.footer_title}>
        <a className={s.title} href="/">
          Foculus <span className={s.title_desc}>your english words</span>
        </a>
      </h1>
      <a target="blank" href="https://github.com/SanGariX">
        GitHub
      </a>
    </footer>
  );
};

export default Footer;
