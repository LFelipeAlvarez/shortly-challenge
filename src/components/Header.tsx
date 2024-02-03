import { useState } from "react";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#">
          <img src="/images/logo.svg" alt="logo" />

        </a>
        <nav className={menuOpened ? "nav nav--active" : "nav"}>
          <ul className="nav__items">
            <div className="nav__group">
              <li className="nav__item">
                <a className="nav__link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav__item nav__item--border">
                <a className="nav__link" href="#resources">
                  Resources
                </a>
              </li>
            </div>
            <div className="nav__group">
              <li className="nav__item">
                <a className="nav__link" href="#login">
                  Login
                </a>
              </li>
              <li className="nav__item">
                <a className="button button--header" href="#signup">
                  Sign Up
                </a>
              </li>
            </div>
          </ul>
        </nav>
        <span
          onClick={() => {
            setMenuOpened(!menuOpened);
          }}
          className="header__menu-button"
        ></span>
      </div>
    </header>
  );
};

export default Header;
