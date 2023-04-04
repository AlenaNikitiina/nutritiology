import header from '../images/header-image.png'

export default function Main () {

  return (
    <section className='description'>
      <h2 className='description__title'>Привет, Я Дарья. Научу&nbsp;вас Нутрициологии</h2>
      <img className="description__image" src={header} alt="logo" />
    </section>
  )
}