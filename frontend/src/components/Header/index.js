import {NavLink} from "react-router-dom";
import './index.css'
import React, {useState} from "react";


export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={`header ${menuOpen ? 'header--open' : ''}`}>
      <div className="header__inner header__inner--main font-theme">
        <div className="header__logo">
          <NavLink to="/" className={"logo logo__link"}>Memes catalogue</NavLink>
        </div>
        <div>
          {/*<nav className={"header-nav"}>*/}
          {/*  <NavLink to="/memes">Memes</NavLink>*/}
          {/*  <NavLink to="/memes/new">Add meme</NavLink>*/}
          {/*  <NavLink to="/templates/new">Upload meme template</NavLink>*/}
          {/*</nav>*/}
          <div className={"header-toggle"}>
            <button className="menu-toggle" onClick={handleToggle}>
        <span className="menu-toggle__inner">
          <span className="menu-toggle__icon menu-toggle__icon--open">
            <span className="menu-toggle__dot"></span>
            <span className="menu-toggle__dot"></span>
            <span className="menu-toggle__dot"></span>
          </span>
        </span>
            </button>
          </div>
        </div>
      </div>
      <div className="header__inner header__inner--menu">
        <div className="header__logo">
          <NavLink to="/" className={"logo logo__link"}>Memes catalogue</NavLink>
        </div>
        <ul className={"header__menu nav-list base-list"}>
          <li><NavLink to="/memes">Memes</NavLink></li>
          <li><NavLink to="/memes/new">Add meme</NavLink></li>
          <li><NavLink to="/templates/new">Upload meme template</NavLink></li>
        </ul>
        <div className="header-toggle">
          <button className="menu-toggle" onClick={handleToggle}>
            <svg className="menu-toggle__icon menu-toggle__icon--close" width="45" height="45" viewBox="0 0 45 45">
              <circle cx="22.5" cy="22.5" r="22.5"></circle>
              <path fill="var(--color-background)"
                    d="M30.3 32.1c-.5 0-1-.2-1.4-.6l-6.5-6.6-6.5 6.5c-.5.5-1 .7-1.5.7-.4 0-.8-.1-1-.4-.3-.3-.5-.6-.5-1 0-.6.3-1.1.7-1.6l6.5-6.5-6.5-6.4c-.4-.5-.7-1-.7-1.5s.2-.8.4-1.1c.3-.3.7-.4 1.1-.4.5 0 1 .2 1.5.7l6.5 6.5 6.5-6.6c.5-.5 1-.7 1.5-.7.3 0 .7.2 1 .5.3.4.5.8.5 1.1 0 .5-.2 1-.7 1.4l-6.5 6.5 6.5 6.6c.5.5.7 1 .7 1.4 0 .4-.1.7-.5 1-.4.4-.7.5-1 .5z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}