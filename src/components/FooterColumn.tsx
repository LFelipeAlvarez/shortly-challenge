import { type TFooterColumn } from "../types/Types";

const FooterColumn = ({ header, rows }: TFooterColumn) => {
  return (
    <section className="footer__section">
      <h2 className="footer__title">{header}</h2>
      <ul className="footer__list">
        {rows.map((row, i) => (
          <li className="footer__item" key={i}>
            <a className="footer__link" href="#">
              {row}
            </a>
          </li>
        ))}

        {/* <li>
            <a href="#">Link Shortening</a>
          </li>
        <li>
          <a href="#">Branded Links</a>
        </li>
        <li>
          <a href="#">Analytics</a>
        </li> */}
      </ul>
    </section>
  );
};

export default FooterColumn;
