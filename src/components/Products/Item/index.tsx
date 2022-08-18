import './item.scss'
import { Button } from '../../Button'

interface ItemProps {
  src: string
  title: string
  oldPrice: string
  newPrice: string
  subPrice: string
  discount: string
  heartIcon: string
}

export function Item({ item }: { item: ItemProps }) {
  return (
    <li className="products__item">
      <header className="products__header">
        <div className="products__header-discount">{item.discount}</div>
        <img className="products__header-heart" src={item.heartIcon} alt="" />
      </header>
      <img className="products__image" src={item.src} alt="" />
      <div className="products__item-container">
        <span className="products__title">{item.title}</span>
        <span className="products__old-price">De R$ {item.oldPrice}</span>
        <strong className="products__new-price">
          Por <span>R$ {item.newPrice}</span>
        </strong>
        <span className="products__sub-price">
          R$ {item.subPrice}
          <span>Para assinantes</span>
        </span>
      </div>
      <Button style="products__button">Adicionar</Button>
    </li>
  )
}
