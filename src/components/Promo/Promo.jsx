import '../Promo/Promo.css';
import daria from '../../images/tiny.jpg';

export default function Promo() {

  return (
    <section className='promo'>
      <div className='promo__content'>
        <h1 className='promo__title'>Привет, Я Дарья. Научу&nbsp;вас&nbsp;Нутрициологии.</h1>
        <img className='promo__img' src={daria} alt='мое фото' />
      </div>
    </section>
  );
}
