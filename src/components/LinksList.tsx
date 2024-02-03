import { type Link } from "../types/Types";
import LinkItem from "./LinkItem";

type LinksListProps = {
  Links: Link[];
};

const LinksList = ({ Links }: LinksListProps) => {
  return (
    <ul className="links-list">
      {Links.map((link, i) => (
        <LinkItem key={i} link={link} />
      ))}
    </ul>
  );
};

export default LinksList;
