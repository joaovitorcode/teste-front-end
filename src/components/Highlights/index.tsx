import './highlights.scss'
import HighlightImage from '../../assets/images/highlight.png'
import CaretDownImage from '../../assets/icons/CaretDown.svg'
import ArrowDownImage from '../../assets/icons/ArrowDown.svg'
import { Button } from '../Button'

export function Highlights() {
  return (
    <div className="highlights">
      <div className="highlights__container">
        <img className="highlights__image" src={HighlightImage} alt="" />
        <button className="highlights__arrow-left">
          <img src={CaretDownImage} alt="" />
        </button>
        <h2 className="highlights__title">
          As melhores guias para os melhores passeios.
        </h2>
        <Button style="highlights__button">Confira</Button>
        <button className="highlights__arrow-right">
          <img src={CaretDownImage} alt="" />
        </button>
        <div className="highlights__switch">
          <div className="highlights__switch-dot--active" />
          <div className="highlights__switch-dot" />
          <div className="highlights__switch-dot" />
        </div>
        <img className="highlights__arrow-bottom" src={ArrowDownImage} alt="" />
      </div>
    </div>
  )
}
