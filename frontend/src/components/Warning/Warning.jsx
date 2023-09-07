import len from '../../images/len.JPG';

export default function AboutMe() {
  return (
    <section className='about-me__contentt'>
      <article className="about-me__text-r">
        <img className="about-me__img" src={len} alt="phot" />
    
        <h2 className="about-me__title">С кем я НЕ работаю:</h2>
        <p className="about-me__paragraph">Я НЕ работаю с теми, у кого тяжелые и среднетяжелые формы расстройства пищевого поведения. Это прерогатива психиатрии и стационара. Но! Я могу оказывать психологическую поддержку всем сопричастным этой теме;
          <br /> <br /> ПОКА я НЕ работаю с беременными, детьми, женщинами на ГВ и профессиональными спортсменами. Как только я почувствую себя достаточно компетентной в этой теме — с удовольствием помогу и проконсультирую!
        <br /> <br />Я НЕ работаю ОДНА с теми, кому нужны другие специалисты. Даже несмотря на то, что я врач и психолог: если я назначаю консультацию терапевта, эндокринолога, психиатра — настоятельно рекомендую ее пройти. При необходимости только совместная продуктивная работа может привести к результату;</p>
      </article>
    </section>
  )
}