import { Link } from "react-router-dom"
import { Button } from "./button"

export const Header = () => {
    return <div className="header">
        <div className="container">
          <Link to={'/'} className="header__logo">
            <img width="38" src="./pizza-logo.svg" alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </Link>
          <div className="header__cart">
              <Button className="button--cart" />
          </div>
        </div>
      </div>
}