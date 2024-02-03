import { useEffect, useState } from "react";
import { type Link } from "../types/Types";
import { getShortenedUrl } from "../helpers/apiUtils";

type FormProps = {
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
  links: Link[]
};

const updateLocalStorage = (newItem: Link) => {
  const currentLinks = localStorage.getItem('shortenedLinks') || '[]';
  if (currentLinks) {
    const currentLinksParsed = JSON.parse(currentLinks);
    const finalLinks = [...currentLinksParsed, newItem];
    localStorage.setItem('shortenedLinks', JSON.stringify(finalLinks));

  }
}

const Form = ({ setLinks, links }: FormProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [warning, setWarning] = useState<boolean>(false);

  useEffect(() => {
    const currentLinks = localStorage.getItem('shortenedLinks');
    if (currentLinks) {
      setLinks(JSON.parse(currentLinks));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {

    e.preventDefault();
    const urlPattern =
      /^(https?:\/\/)((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
    const inputValueCleaned = inputValue.replace(/\s{2,}/g, " ").trim();
    if (!inputValueCleaned || !urlPattern.test(inputValueCleaned)) {
      setWarning(true);
      return;
    }

    setWarning(false);
    const { shortURL: shortenedLink /*, code*/ } = await getShortenedUrl(
      inputValueCleaned
    );
    // if (code && code.includes("InvalidFormat")) {
    //   setWarning(true);
    // }
    const newLink: Link = {
      normalLink: inputValueCleaned,
      shortenedLink,
    };
    if (links.length <= 3) {
      updateLocalStorage(newLink);
      setLinks((prevLinks) => [...prevLinks, newLink]);
      setInputValue('');

    }


  };

  return (
    <div className="form-container">
      <form
        onSubmit={handleSubmit}
        className={warning ? "form form--warning" : "form"}
      >
        <input
          placeholder="Shorten a link here..."
          type="text"
          id="link"
          className={
            warning ? "form__input form__input--warning" : "form__input"
          }
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          aria-label="Link to be shortened"
        />
        <button className="button button--form">Shorten it!</button>
      </form>
    </div>
  );
};

export default Form;
