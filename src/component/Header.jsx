import PropTypes from "prop-types";
import "../css/header.css";
import { useState } from "react";

export default function Header(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSpam, setIsSpam] = useState(false);

  const listItems = props.sections.map((item) => (
    <li className="nav__item" key={item.id}>
      <a href={`#section${item.id}`}>{item.name}</a>
    </li>
  ));

  const navigation = (
    <nav className="nav">
      <ul className="nav__list">{listItems}</ul>
    </nav>
  );

  function toggleNav() {
    if (!isSpam) {
      setIsSpam(true);

      if (isNavOpen) {
        const nav = document.querySelector(".nav");
        nav.classList.add("nav--fade");

        setTimeout(() => {
          setIsNavOpen((prev) => !prev);
          setIsSpam(false);
        }, 500);
      } else {
        setIsNavOpen((prev) => !prev);
        
        setTimeout(() => {
          setIsSpam(false);
        }, 500);
      }
    }
  }

  return (
    <header className="header">
      <h1 className="header__logo">{props.pageName}</h1>
      <div className="dropdown">
        <button className="header__button button" onClick={toggleNav}>
          ☰
        </button>
        {isNavOpen && navigation}
      </div>
    </header>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  pageName: PropTypes.string.isRequired,
};
