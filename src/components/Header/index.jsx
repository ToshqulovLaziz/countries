import React from "react";
import { Link } from "react-router-dom";
import {BsMoon} from 'react-icons/bs';
import "./header.scss";
import { Context as ModeContext } from "../../context/Mode";
import { Context as ModeText } from "../../context/ModeText";
const Header = () => {
  const {theme, toggleTheme} = React.useContext(ModeContext);
  const {modeText, toggleText} =React.useContext(ModeText);
  return (
    <React.Fragment>
      <header className={`site-header app--${theme}`}>
        <div className="container">
          <div className="site-header__wrapper">
            <Link className="site-header__link" to="/">
              <h1 className="site-header__title">Where in the world?</h1>
            </Link>
            <button
              className={`site-header__mode app--${theme}`}
              type="button"
              onClick={() => toggleTheme(
                toggleText()
              )}
            >
              <BsMoon /> {modeText}
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
