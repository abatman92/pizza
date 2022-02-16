import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartEmpty, CartItem } from ".";
import { RemoveAllCartItems } from "../redux/actions/cart";
import { arrowLeftSvg, bigCartSvg, bucketSvg } from "./svg";

export const Cart = () => {
  const dispatch = useDispatch()
  const makeCartClear = useCallback(() => dispatch(RemoveAllCartItems()));
  const { totalPrice, itemsInCart, items } = useSelector(({ cart }) => cart);
  const itemsArr = Object.entries(items)
  const itemsHeadings = itemsArr.map(([key, value]) => value[0])
  const itemsTotalprice = itemsArr.reduce((acc, [key, value]) => {
    return [...acc, value.reduce((acc, item) => acc + item.price, 0)]
  }, [])
  const itemQuantity = (i) => items[i].length
  console.log(itemQuantity(0))
 console.log(itemQuantity(0))
  return itemsArr.length > 0 ? (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            {bigCartSvg}
            Корзина
          </h2>
          <div onClick={makeCartClear} className="cart__clear">
            {bucketSvg}
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="content__items">
          {itemsHeadings.map((item, i) => (
            <CartItem key={item.name} totalQuantiity={itemQuantity(i)} totalPrice={itemsTotalprice[i]} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{itemsInCart} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              {arrowLeftSvg}

              <span>Вернуться назад</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <CartEmpty />
  );
};
