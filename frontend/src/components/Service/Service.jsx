import './Service.css';
import { Link } from 'react-router-dom';

export default function Service() {

  return (
    <section className='servise'>
      <div className="servise__content">
        <a className="service__link link" href="#" target="_blank">Запись на консультацию<span className="service__arrow">⟶</span></a>
    

        <a className="service__link link" href="#" target="_blank">Запись на личное ведение<span className="service__arrow">⟶</span></a>
      </div>
    </section>
  )
};


//<Link to='/signup' className='navigation__auth-item link'>Запись на консультацию</Link


/*
        <Routes>
          <Route path='/sign-in' element={
            <Link to={'/sign-up'} className="header__navLink header__navLink_active">Регистрация</Link> }
          />
          <Route path='/sign-up' element={
            <Link to={'/sign-in'} className="header__navLink header__navLink_active">Войти</Link> }
          />
        </Routes>
        */