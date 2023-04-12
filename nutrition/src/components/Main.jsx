
//import daria from '../images/DSC_0063ch.JPG';
import daria from '../images/dariachort.jpg';
import one from '../images/DSC_0267.JPG';
import two from '../images/DSC_0201.JPG';

export default function Main () {

  return (
    <>
    <section className='description'>
      <h1 className='description__title'>Привет, Я Дарья. Научу&nbsp;вас&nbsp;Нутрициологии.</h1>
      <img className="description__image" src={daria} alt="logo" />
    </section>
    <section className="about__me">
    <article className="about">
        <img  className="about__img" src={one} alt="photo" />
        <h2 className="about__title" >Обо мне</h2>
        <p className="about__paragraph">Мед образование. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis corporis ipsa eligendi, laudantium magni ratione saepe rem voluptatibus iure mollitia. Porro possimus deleniti quae, sequi suscipit rem omnis iste et! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae nam adipisci, expedita dolor minus eum accusamus odit mollitia hic perferendis tenetur sit in. Expedita tempore soluta nihil odit nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, esse sunt ullam eos possimus ad. Culpa accusantium nihil excepturi repudiandae placeat. Sed illum voluptatem, quia quos nam nesciunt sunt corporis!</p>
      </article>
      <article className="about">
        <img  className="about__img" src={two} alt="photo" />
        <h2 className="about__title" >Обо мне</h2>
        <p className="about__paragraph">Доп курсы. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis corporis ipsa eligendi, laudantium magni ratione saepe rem voluptatibus iure mollitia. Porro possimus deleniti quae, sequi suscipit rem omnis iste et! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae nam adipisci, expedita dolor minus eum accusamus odit mollitia hic perferendis tenetur sit in. Expedita tempore soluta nihil odit nemo!</p>
      </article>
    </section>
  </>
  )
}


