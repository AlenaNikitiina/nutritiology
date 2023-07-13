import './AboutMe.css';
import one from '../../images/D.jpg.jpg';
import two from '../../images/D.jpg.jpg'

export default function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-me__content '>
        <article className="about-me__text">
          <img  className="about-me__img" src={one} alt="phot" />
          <h2 className="about-me__title" >Обо мне</h2>
          <p className="about-me__paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis corporis ipsa eligendi, laudantium magni ratione saepe rem voluptatibus iure mollitia. Porro possimus deleniti quae, sequi suscipit rem omnis iste et! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae nam adipisci, expedita dolor minus eum accusamus odit mollitia hic perferendis tenetur sit in. Expedita tempore soluta nihil odit nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, esse sunt ullam eos possimus ad. Culpa accusantium nihil excepturi repudiandae placeat. Sed illum voluptatem, quia quos nam nesciunt sunt corporis!</p>
        </article>

        <article className="about-me__text">
          <img className="about-me__img" src={two} alt="phot" />
          <h2 className="about-me__title" >Образование</h2>
          <p className="about-me__paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis corporis ipsa eligendi, laudantium magni ratione saepe rem voluptatibus iure mollitia. Porro possimus deleniti quae, sequi suscipit rem omnis iste et! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae nam adipisci, expedita dolor minus eum accusamus odit mollitia hic perferendis tenetur sit in. Expedita tempore soluta nihil odit nemo!</p>
        </article>
      </div>
    </section>
  )
};