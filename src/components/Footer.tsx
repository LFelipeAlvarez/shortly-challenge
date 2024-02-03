import FooterColumnGroup from "./FooterColumnGroup";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#" className="footer__logo-container">
          <img className="footer__logo" src="/images/logo2.svg" alt="logo" />
        </a>
        <FooterColumnGroup />
        <div className="footer__social">
          <a className="footer__facebook" href="#"></a>
          <a className="footer__twitter" href="#"></a>
          <a className="footer__pinterest" href="#"></a>
          <a className="footer__instagram" href="#"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
