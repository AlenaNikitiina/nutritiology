import inst from '../images/instagram_color_white.svg'

export default function Footer () {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <p className="footer__author">© {(new Date()).getFullYear()} Alena Nikitina</p>
      </div>
      <div class="footer__column">
        <h3 class="footer__column-heading">Мои Соцсети:</h3>
        <div class="footer__column-links">
          <a href="https://instagram.com/daria_li89?igshid=YmMyMTA2M2Y=" className="footer__column-link link-style" target="_blank">
            <img class="footer__social-icon" src={inst} alt="Инстаграм" /> Instagram</a>
          <a href="https://instagram.com/daria_li89?igshid=YmMyMTA2M2Y=" className="footer__column-link link-style" target="_blank">
            <img class="footer__social-icon" src={inst} alt="Инстаграм" /> Instagram</a>
        </div>
      </div>
    </footer>
  )
}
