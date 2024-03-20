import '../Promo/Promo.css';
import daria from '../../images/D.jpg.jpg';

export default function Promo() {
  return (
    <section className='promo'>
      <div className='promo__content'>
        <div className='promo__info'>
          <h1 className='promo__title'>Дарья Литуева</h1>
          <p className='promo__paragraph'>Личные консультации по&nbsp;нутрициологии.</p>
          <a href="tg://resolve?domain=litueva_life" className="promo__link link" target="_blank">Записаться</a>
        </div>
          <img className='promo__img' src={daria} alt='мое фото' />
      </div>
    </section>
  );
}