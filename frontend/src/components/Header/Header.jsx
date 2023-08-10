// import { Route, Routes, Link } from "react-router-dom";
import '../Header/Header.css';

export default function Header () {

  return (
    <header className="header">
      <section className="header__content">
        <button className='header__button button' type='button'>Обо мне</button>
        <button className='header__button button' type='button'>Отзывы</button>
      </section>
    </header>
  );
}
