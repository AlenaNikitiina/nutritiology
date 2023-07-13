import './Footer.css'
import inst from '../../images/instagram_color_white.svg'

export default function Footer () {
  return (
    <footer className="footer">
      <div className='footer__content'>

        <div className="footer__copyright">
          <p className="footer__author">© {(new Date()).getFullYear()} Alena Nikitina</p>
        </div>

        <nav className="footer__nav">
          <h3 className="footer__nav-heading">Мои Соцсети :</h3>
          <ul className="footer__nav-links">
            <li>
              <a href="https://instagram.com/daria_li89?igshid=YmMyMTA2M2Y=" className="footer__nav-link link" target="blank">
                <img className="footer__social-icon" src={inst} alt="Инстаграм" /> Instagram</a>
            </li>
            <li>
              <a href="https://instagram.com/daria_li89?igshid=YmMyMTA2M2Y=" className="footer__nav-link link" target="blank">
                <img className="footer__social-icon" src={inst} alt="Инстаграм" /> Instagram</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
