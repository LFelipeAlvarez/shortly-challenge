import { type TFooterColumn } from "../types/Types";
import FooterColumn from "./FooterColumn";

const columns: TFooterColumn[] = [
  {
    header: "Features",
    rows: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    header: "Resources ",
    rows: ["Blog", "Developers", "Support"],
  },
  {
    header: "Company",
    rows: ["About", "Our Team", "Careers", "Contact"],
  },
];

const FooterColumnGroup = () => {
  return (
    <nav className="footer__nav">
      {columns.map((column, i) => (
        <FooterColumn key={i} {...column} />
      ))}
    </nav>
  );
};

export default FooterColumnGroup;
