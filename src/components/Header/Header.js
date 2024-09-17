import React from 'react';
import './style.css';

const Header = () => (
  <header>
    <nav className="navbar">
      <div className="profile">
        <img src="https://github.com/Caiobaldudev.png" alt="Avatar de Caio" />
      </div>
      <ul>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#xp">Experiência</a>
        </li>
        <li>
          <a href="skills">Habilidades</a>
        </li>
        <li>
          <a href="projects">Projetos</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
