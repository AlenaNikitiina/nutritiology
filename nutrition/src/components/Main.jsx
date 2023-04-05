//import header from '../images/header-image.png'
import daria from '../images/DSC_0063.JPG'

export default function Main () {

  return (
    <section className='description'>
      <h1 className='description__title'>Привет, Я Дарья. Научу&nbsp;вас&nbsp;Нутрициологии.</h1>
      <img className="description__image" src={daria} alt="logo" />
    </section>
  )
}