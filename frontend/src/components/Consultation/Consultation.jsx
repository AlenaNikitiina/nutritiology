/*
import '../Consultation/Consultation.css';
//import edaa from '../../images/edaa.jpg';
//<img className='eda' src={edaa} alt="" />

export default function Consultation () {
return (
  <section className='consultation'>
    <div className='consultation__content'>
      <div className='div' >
      <h1 className='consultation__title'>Консультации</h1>
      <p className='consultation__paragraph-title'>Мое время не бесплатное. Это самое ценное, что у нас с вами есть, поэтому бесплатных консультаций у меня нет.</p>
      <p className='consultation__paragraph'>Я отправляю первичную анкету для ознакомления. Далее мы договариваемся о дате и времени. На консультации, если в первые 20 минут знакомства и общения я понимаю ваш запрос то, представляю чем могу вам помочь. Если ваш запрос вне моей компетенции, то деньги я брать не буду. Постараюсь направить к нужному специалисту. Если вы не хотите быть на связи со мной ежедневно, и у вас уже есть опыт совершенствования себя, вы сами неплохо разбираетесь в вопросах здоровья и питания, то в этом случае режим консультации вполне продуктивен.</p>
      <p className='consultation__paragraph'>Я могу:</p>
      <ul className='consultation__list'>
        <li className='consultation__item'>ответить на ваши вопросы, если они локальные и не требуют дальнейшей совместной работы.</li>
        <li className='consultation__item'>обозначить check-up по анализам и необходимым обследованиям.</li>
        <li className='consultation__item'>решить отдельные запросы по коррекции пищевой тарелки, продуктам питания.</li>
      </ul>
      <p className='consultation__price'>Цена консультации: 2000 руб./час</p>
      </div>

    <div className='div'>
      <h1 className='consultation__title'>Личное ведение</h1>
      <p className='consultation__paragraph'>В том случае, если вы хотите:</p>
      <ul className='consultation__list'>
        <li className='consultation__item'>личного консультирования ежедневно</li>
        <li className='consultation__item'>задавать мне вопросы в любое время (рабочее)</li>
        <li className='consultation__item'>интересоваться составом и сочетанием продуктов</li>
        <li className='consultation__item'>сдать check-up по анализам и услышать от меня обратную связь</li>
        <li className='consultation__item'>получать знания, которые останутся с вами в будущем</li>
        <li className='consultation__item'>чувствовать психологическую поддержку и помощь</li>
      </ul>

      <p className='consultation__paragraph'>Как оно проходит?</p>
      <ul className='consultation__list'>
        <li className='consultation__item'>Мы созваниваемся, обсуждаем ваши вопросы и цели</li>
        <li className='consultation__item'>В случае взаимного понимания подписываем соглашение</li>
        <li className='consultation__item'>Вы заполняете опросники/анкеты, затем мы обсуждаем план дальнейшей работы</li>
        <li className='consultation__item'>Вы на связи со мной ежедневно, я корректирую дневник питания, пищевые добавки, ваши личные запросы</li>
      </ul>
      <p className='consultation__paragraph'>Для ознакомления со мной и уверенности, что вы выбрали того, кто вам нужен, я даю бонус: <span className='consultation__span'>первая неделя бесплатно!</span></p>
      <p className='consultation__price'>Цена личного ведения: 10 000 руб./месяц</p>
    </div>
  </div>
  </section>

)
}
*/






import '../Consultation/Consultation.css';

export default function Consultation () {
return (
  <section className='consultation'>
    <h1 className='consultation__heading'>Мои услуги :</h1>
    <div className='consultation__content'>
    <div className='div'>
      <h2 className='consultation__title'>Консультации</h2>
      <p className='consultation__paragraph'>Я могу:</p>
      <ul className='consultation__list'>
        <li className='consultation__item'>ответить на ваши вопросы, если они локальные и не требуют дальнейшей совместной работы.</li>
        <li className='consultation__item'>обозначить check-up по анализам и необходимым обследованиям.</li>
        <li className='consultation__item'>решить отдельные запросы по коррекции пищевой тарелки, продуктам питания.</li>
      </ul>
      <p className='consultation__price'>Цена консультации: 2000 руб./час</p>
    </div>

    <div className='div'>
      <h2 className='consultation__title'>Личное ведение</h2>
      <p className='consultation__paragraph'>В том случае, если вы хотите:</p>
      <ul className='consultation__list'>
        <li className='consultation__item'>личного консультирования ежедневно</li>
        <li className='consultation__item'>задавать мне вопросы в любое время (рабочее)</li>
        <li className='consultation__item'>интересоваться составом и сочетанием продуктов</li>
        <li className='consultation__item'>сдать check-up по анализам и услышать от меня обратную связь</li>
        <li className='consultation__item'>получать знания, которые останутся с вами в будущем</li>
        <li className='consultation__item'>чувствовать психологическую поддержку и помощь</li>
      </ul>

      <p className='consultation__paragraph'>Как оно проходит?</p>
      <ul className='consultation__list'>
        <li className='consultation__item'>Мы созваниваемся, обсуждаем ваши вопросы и цели</li>
        <li className='consultation__item'>В случае взаимного понимания подписываем соглашение</li>
        <li className='consultation__item'>Вы заполняете опросники/анкеты, затем мы обсуждаем план дальнейшей работы</li>
        <li className='consultation__item'>Вы на связи со мной ежедневно, я корректирую дневник питания, пищевые добавки, ваши личные запросы</li>
      </ul>
      <p className='consultation__paragraph'>Для ознакомления со мной и уверенности, что вы выбрали того, кто вам нужен, я даю бонус: <span className='consultation__span'>первая неделя бесплатно!</span></p>
      <p className='consultation__price'>Цена личного ведения: 10 000 руб./месяц</p>
      </div>
    </div>
  </section>

)
}



//<p className='consultation__paragraph-title'>Мое время не бесплатное. Это самое ценное, что у нас с вами есть, поэтому бесплатных консультаций у меня нет.</p>

/*
<p className='consultation__paragraph'>Я отправляю первичную анкету для ознакомления. Далее мы договариваемся о дате и времени. На консультации, если в первые 20 минут знакомства и общения я понимаю ваш запрос то, представляю чем могу вам помочь. Если ваш запрос вне моей компетенции, то деньги я брать не буду. Постараюсь направить к нужному специалисту. Если вы не хотите быть на связи со мной ежедневно, и у вас уже есть опыт совершенствования себя, вы сами неплохо разбираетесь в вопросах здоровья и питания, то в этом случае режим консультации вполне продуктивен.</p>*/