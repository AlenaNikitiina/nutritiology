import header from '../images/header-image.png'

export default function Main () {

  return (
    <section className='description'>
      <h1 className='description__title'>Привет, Я Дарья. Научу&nbsp;вас Нутрициологии.</h1>
      <img className="description__image" src={header} alt="logo" />
    </section>
  )
}