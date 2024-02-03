import { useRef, useState } from "react";
import { Link } from "../types/Types";

const LinkItem = ({ link }: { link: Link }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const CopyToClipboard = async () => {
    if (textRef.current) {
      try {
        await navigator.clipboard.writeText(
          textRef.current.textContent?.trim() || ""
        );
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch (error) {
        console.error("Error getting text with Clipboard API", error);
      }
    }
  };
  return (
    <li className="link-card">
      <div className="link-card__section">
        <p className="link-card__text">{link.normalLink}</p>
      </div>
      <div className="link-card__section link-card__section--right">
        <p ref={textRef} className="link-card__text link-card__text--shortened">
          {link.shortenedLink}
        </p>
        {copied ? (
          <button
            disabled
            className="button button--list button--form button--copied"
            onClick={CopyToClipboard}
          >
            ¡Copied!
          </button>
        ) : (
          <button
            className="button button--form button--list"
            onClick={CopyToClipboard}
          >
            Copy
          </button>
        )}

        {/* <button className="button button--form" onClick={CopyToClipboard}>
          {copied ? "¡Copied!" : "Copy"}
        </button> */}
      </div>
    </li>
  );
};

export default LinkItem;
