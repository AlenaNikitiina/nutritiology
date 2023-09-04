import '../Stage/Stage.css';

export default function Stage() {
  return (
    <section className='stage'>
      <div className='stage__content'>
        <h1 className='stage__title'>Этапы работы</h1>

        <ul className='stage__list'>
          <li className='stage__item'>
            <h2 className='stage__subtitle'>(1)&nbsp;Знакомство</h2>
            <p className='stage__paragraph'>Мое время не бесплатное. Это самое ценное, что у нас с вами есть, поэтому бесплатных консультаций у меня нет. Я отправляю первичную анкету для ознакомления. Далее мы договариваемся о дате и времени.</p>
          </li>
          <li className='stage__item'>
            <h2 className='stage__subtitle'>(2)&nbsp;Анализ вашего состояния</h2>
            <p className='stage__paragraph'> На консультации, если в первые 20 минут знакомства и общения я понимаю ваш запрос то, представляю чем могу вам помочь. Если ваш запрос вне моей компетенции, то деньги я брать не буду. Постараюсь направить к нужному специалисту.</p>
          </li>
          <li className='stage__item'>
            <h2 className='stage__subtitle'>(3)&nbsp;Подготовка к работе</h2>
            <p className='stage__paragraph'> Если вы не хотите быть на связи со мной ежедневно, и у вас уже есть опыт совершенствования себя, вы сами неплохо разбираетесь в вопросах здоровья и питания, то в этом случае режим консультации вполне продуктивен.</p>
          </li>
          <li className='stage__item'>
            <h2 className='stage__subtitle'>(4)&nbsp;Состовление программы</h2>
            <p className='stage__paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam odio ipsum nihil qu molestiae eius spiciatis possimus sit vitae deleniti consectetur omnis libero distinctio laboriosam laborum.</p>
          </li>
          <li className='stage__item'>
            <h2 className='stage__subtitle'>(5)&nbsp;Сопровождение</h2>
            <p className='stage__paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam odio ipsum nihil quaerat, animi exercitationem doloribus molestiae eius tempora perspiciatis possimus sit vitae deleniti consectetur omnis libero distinctio laboriosam laborum.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}