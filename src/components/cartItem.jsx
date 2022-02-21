import { delSvg } from "./svg";

export const CartItem = ({totalPrice, name, id, imageUrl, totalQuantiity, removeItem}) => {
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
          <p></p>
        </div>
        <div className="cart__item-count">
          <b>Кол-во: {totalQuantiity}</b>
        </div>
        <div className="cart__item-price">
          <b>{totalPrice} ₽</b>
        </div>
        <div className="cart__item-remove">
    <div onClick={() => removeItem(id)} className="button button--outline button--circle">
      {delSvg}
    </div>
  </div>
      </div>
    );
}