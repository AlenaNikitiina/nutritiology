import './AboutMe.css';
import one from '../../images/D.jpg.jpg';
import two from '../../images/docka.JPG';
import th from '../../images/mechok.JPG';

export default function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-me__content '>
        <article className="about-me__text">
          <img  className="about-me__img" src={one} alt="phot" />
          <h2 className="about-me__title" >Обо мне</h2>
          <p className="about-me__paragraph"></p>
          <p className="about-me__paragraph">Меня зовут Дарья Литуева. У меня 2 высших образования. Психолог-педагог. ‌И врач анестезиолог-реаниматолог. На данный момент я закончила базовый курс по нутрициологии. Прохожу обучение в Университете образовательной медицины на курсе Health-коучинга и очень кайфую от этого. Примерно как 5 лет назад от анестезиологии.Но врач я лишь с одной стороны. С другой я — обычный человек. Со своими страхами и вопросами. И один из главных запросов — это Здоровое Отношение к Жизни.Как его создать, сохранить. И преумножить.</p>
        </article>

        <article className="about-me__text">
          <img className="about-me__img" src={two} alt="phot" />
          <h2 className="about-me__title" >Образование</h2>
          <p className="about-me__paragraph">Я выступаю за осознанность в отношении себя и своей жизни. И хочу стать союзником для вас в таких темах, как: 
            <br /> <br />Вопросы здорового образа жизни. Как к этому прийти, от чего оттолкнуться и на что опираться. И как преумножить свои знания в этой теме, если она уже вам знакома; <br /> <br /> Вопросы лишнего веса. Почему вес не уходит, почему стоит. Как начать, успешно идти к заветной мечте и главное, как сохранить полученный результат;
            <br /> <br /> Вопросы плохого самочувствия, когда «всё вроде бы хорошо, но по утрам встать сложно, а вечером не заснуть». Когда «разбитость и психосоматика» — ваше второе «я» и вы очень хотите это изменить.</p>
        </article>

        <article className="about-me__text">
          <img className="about-me__img" src={th} alt="phot" />
          <h2 className="about-me__title" >С кем я НЕ работаю:</h2>
          <p className="about-me__paragraph">Я НЕ работаю с теми, у кого тяжелые и среднетяжелые формы расстройства пищевого поведения. Это прерогатива психиатрии и стационара. Но! Я могу оказывать психологическую поддержку всем сопричастным этой теме;
            <br /> <br /> ПОКА я НЕ работаю с беременными, детьми, женщинами на ГВ и профессиональными спортсменами. Как только я почувствую себя достаточно компетентной в этой теме — с удовольствием помогу и проконсультирую!
          <br /> <br />Я НЕ работаю ОДНА с теми, кому нужны другие специалисты. Даже несмотря на то, что я врач и психолог: если я назначаю консультацию терапевта, эндокринолога, психиатра — настоятельно рекомендую ее пройти. При необходимости только совместная продуктивная работа может привести к результату;</p>
        </article>
      </div>
    </section>
  )
};