import {NavLink} from "react-router-dom";
import './index.css'


export function Header() {
  return (
    <header className={"header"}>
      <NavLink to="/">Memes catalogue</NavLink>
      <nav className={"header-nav"}>
        <NavLink to="/memes">Memes</NavLink>
        <NavLink to="/memes/new">Add meme</NavLink>
        <NavLink to="/templates/new">Upload meme template</NavLink>
      </nav>
    </header>
  );
};