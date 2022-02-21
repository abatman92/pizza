import { Link } from "react-router-dom";
import { sadSvg } from "./svg";

export const CartEmpty = () => {
    return (
        <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Корзина пустая {sadSvg}</h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.<br/>
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src="/empty-cart.png" alt="Empty cart" />
            <Link to={"/"} className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
        </div>
      </div>
    );
}