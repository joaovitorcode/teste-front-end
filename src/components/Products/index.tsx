import './products.scss'
import CaretDownSmImage from '../../assets/icons/CaretDownSm.svg'
import { links, items } from './constants'
import { Item } from './Item'

interface LinkProps {
  name: string
  href: string
  modifier: string
}

interface ItemProps {
  src: string
  title: string
  oldPrice: string
  newPrice: string
  subPrice: string
  discount: string
  heartIcon: string
}

export function Products() {
  return (
    <div className="products">
      <div className="products__container">
        <header className="products__header">
          <h2 className="products__title">Meu cachorro</h2>
          <nav className="products__nav">
            <img
              className="products__nav-arrow-left"
              src={CaretDownSmImage}
              alt=""
            />
            <ul className="products__nav-list">
              {links.map((link: LinkProps) => (
                <li
                  key={link.name}
                  className={`products__nav-item ${link.modifier}`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
            <img
              className="products__nav-arrow-right"
              src={CaretDownSmImage}
              alt=""
            />
          </nav>
        </header>
        <ul className="products__list">
          {items.map((item: ItemProps) => (
            <Item key={item.title} item={item} />
          ))}
        </ul>
        <footer className="products__footer">
          <a href="#">Ver todos</a>
          <div className="products__footer-switch">
            <div className="products__footer-dot products__footer-dot--active" />
            <div className="products__footer-dot" />
            <div className="products__footer-dot" />
            <div className="products__footer-dot" />
            <div className="products__footer-dot" />
          </div>
        </footer>
      </div>
    </div>
  )
}
