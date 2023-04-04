import { Route, Routes, Link } from "react-router-dom";

export default function Header () {

  return (
    <header className="header">
      <button className='header__button' type='button'>Обо мне</button>
      <button className='header__button' type='button'>Отзывы</button>
      <Routes>
        <Route path='/' element={
          <Link to={'/about'} className="header__button header__navLink header__navLink_active">Обо мне</Link> }
        />
      </Routes>
    </header>
  );
}
