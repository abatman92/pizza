import { delSvg, minusSvg, plusCartSvg } from "./svg";

export const CartItem = ({totalPrice, name, imageUrl, totalQuantiity}) => {
    return (
      <div className="cart__item">
        <div className="cart__item-img">
          <img
            className="pizza-block__image"
            src={imageUrl}
            alt={name}
          />
        </div>
        <div className="cart__item-info">
          <h3>{name}</h3>
          <p>тонкое тесто, 26 см.</p>
        </div>
        <div className="cart__item-count">
          <b>Кол-во: {totalQuantiity}</b>
        </div>
        <div className="cart__item-price">
          <b>{totalPrice} ₽</b>
        </div>
      </div>
    );
}