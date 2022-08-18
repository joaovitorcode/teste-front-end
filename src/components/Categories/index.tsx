import './categories.scss'
import ArrowDownImage from '../../assets/icons/ArrowDown.svg'
import { items } from './constants'

interface ItemProps {
  description: string
  src: string
}

export function Categories() {
  return (
    <div className="categories">
      <div className="categories__container">
        <h2 className="categories__title">Categorias</h2>
        <button className="categories__arrow-left">
          <img src={ArrowDownImage} alt="" />
        </button>
        <ul className="categories__list">
          {items.map((item: ItemProps) => (
            <li key={item.description} className="categories__item">
              <img className="categories__image" src={item.src} alt="" />
              <span className="categories__description">
                {item.description}
              </span>
            </li>
          ))}
        </ul>
        <button className="categories__arrow-right">
          <img src={ArrowDownImage} alt="" />
        </button>
      </div>
    </div>
  )
}
