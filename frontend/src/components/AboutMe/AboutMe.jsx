import './AboutMe.css';
import one from '../../images/D.jpg.jpg';
import len from '../../images/len.JPG';
import eda from '../../images/eda.JPG';
import ya from '../../images/ya.JPG';

export default function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-me__content '>
        <article className="about-me__text">
          <img  className="about-me__img" src={ya} alt="phot" />
          
          <h2 className="about-me__title" >Образование</h2>
          <div>
            <p className="about-me__paragraph">Меня зовут Дарья Литуева. У меня 2 высших образования. Психолог-педагог. ‌И врач анестезиолог-реаниматолог.</p>
            <p className="about-me__paragraph">На данный момент я закончила базовый курс по нутрициологии. Прохожу обучение в Университете образовательной медицины на курсе Health-коучинга и очень кайфую от этого. Примерно как 5 лет назад от анестезиологии.</p>
            <p className="about-me__paragraph">Но врач я лишь с одной стороны. С другой я — обычный человек. Со своими страхами и вопросами. И один из главных запросов — это Здоровое Отношение к Жизни. Как его создать, сохранить и преумножить.</p>
          </div>
        </article>

        <article className="about-me__text">
          <img className="about-me__img" src={eda} alt="phot" />
          
          <h2 className="about-me__title" >Обо мне</h2>
          <div>
            <p className="about-me__paragraph">Я выступаю за осознанность в отношении себя и своей жизни. И хочу стать союзником для вас в таких темах, как: </p>
            <p className="about-me__paragraph">Вопросы здорового образа жизни. Как к этому прийти, от чего оттолкнуться и на что опираться. И как преумножить свои знания в этой теме, если она уже вам знакома.</p>
            <p className="about-me__paragraph">Вопросы лишнего веса. Почему вес не уходит, почему стоит. Как начать, успешно идти к заветной мечте и главное, как сохранить полученный результат.</p>
            <p className="about-me__paragraph">Вопросы плохого самочувствия, когда «всё вроде бы хорошо, но по утрам встать сложно, а вечером не заснуть». Когда «разбитость и психосоматика» — ваше второе «я» и вы очень хотите это изменить.</p>
          </div>
        </article>


      </div>
    </section>
  )
};