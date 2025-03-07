import './home.scss'
import { Header } from '../../components/Header'
import { Highlights } from '../../components/Highlights'
import { Categories } from '../../components/Categories'
import { Products } from '../../components/Products'

export function Home() {
  return (
    <div className="home__container">
      <Header />
      <Highlights />
      <Categories />
      <Products />
    </div>
  )
}
