import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const Header = () => {
  const { totalPrice, itemsInCart } = useSelector(({cart}) => cart)
    return (
      <div className="header">
        <div className="container">
          <Link to={"/"} className="header__logo">
            <img width="38" src="./pizza-logo.svg" alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </Link>
          <div className="header__cart">
            <Link
              to="/cart"
              className="button button--cart"
            >
              <span>{totalPrice} ₽</span>
              <div className="button__delimiter"></div>
              <span>{itemsInCart}</span>
            </Link>
          </div>
        </div>
      </div>
    );
}