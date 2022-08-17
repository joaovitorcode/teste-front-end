import './header.scss'
import LogoImage from '../../assets/images/logo.svg'
import ShieldCheckIcon from '../../assets/icons/ShieldCheck.svg'
import TruckIcon from '../../assets/icons/Truck.svg'
import CreditCardIcon from '../../assets/icons/CreditCard.svg'
import MagnifyingGlassIcon from '../../assets/icons/MagnifyingGlass.svg'
import BoxIcon from '../../assets/icons/Box.svg'
import HeartIcon from '../../assets/icons/Heart.svg'
import UserCircleIcon from '../../assets/icons/UserCircle.svg'
import ShoppingCartIcon from '../../assets/icons/ShoppingCart.svg'

export function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <span className="header__slogan">
          <img src={ShieldCheckIcon} alt="" />
          Compra <strong className="header__slogan-strong">100% segura</strong>
        </span>
        <span className="header__slogan">
          <img src={TruckIcon} alt="" />
          <strong className="header__slogan-strong">Frete</strong> grátis acima
          de R$ 200
        </span>
        <span className="header__slogan">
          <img src={CreditCardIcon} alt="" />
          <strong className="header__slogan-strong">Parcele</strong> suas
          compras
        </span>
      </div>
      <div className="header__middle">
        <div className="header__middle-container">
          <img src={LogoImage} alt="Logo O Cãoselheiro" />
          <div className="header__search-wrapper">
            <input
              type="text"
              placeholder="O que você está buscando?"
              className="header__search"
            />
            <img src={MagnifyingGlassIcon} alt="" />
          </div>
          <nav className="header__nav-icons">
            <ul>
              <li>
                <a href="#">
                  <img src={BoxIcon} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={HeartIcon} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={UserCircleIcon} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={ShoppingCartIcon} alt="" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header__bottom">
        <nav className="header__nav-icons">
          <ul>
            <li>
              <a href="#">Brincar</a>
            </li>
            <li>
              <a href="#">Morder</a>
            </li>
            <li>
              <a href="#">Comer</a>
            </li>
            <li>
              <a href="#">Passear</a>
            </li>
            <li>
              <a href="#">Casa e conforto</a>
            </li>
            <li>
              <a href="#">Educação</a>
            </li>
            <li>
              <a href="#">Ofertas</a>
            </li>
            <li>
              <a href="#">Coleção de outono</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
