import './Warning.css';
import lenta from '../../images/lenta.JPG';

export default function Warning () {
  return (
    <section className='warning'>
      <div className='warning__content'>
        <article className='warning__text'>
          <img className='warning__img' src={lenta} alt='phot' />
          <h2 className='warning__title'>С кем я НЕ работаю:</h2>
          <div>
            <p className='warning__paragraph'>Я НЕ работаю с теми, у кого тяжелые и среднетяжелые формы расстройства пищевого поведения. Это прерогатива психиатрии и стационара. Но! Я могу оказывать психологическую поддержку всем сопричастным этой теме.</p>
            <p className='warning__paragraph'>ПОКА я НЕ работаю с беременными, детьми, женщинами на ГВ и профессиональными спортсменами. Как только я почувствую себя достаточно компетентной в этой теме — с удовольствием помогу и проконсультирую!</p>
            <p className='warning__paragraph'>Я НЕ работаю ОДНА с теми, кому нужны другие специалисты. Даже несмотря на то, что я врач и психолог: если я назначаю консультацию терапевта, эндокринолога, психиатра — настоятельно рекомендую ее пройти. При необходимости только совместная продуктивная работа может привести к результату.</p>
          </div>
        </article>
      </div>
    </section>
  )
}