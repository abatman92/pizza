import cn from "classnames";
import { useCallback, useState } from "react";
import { plusSvg } from "./svg";

const thicknesses = ["тонкое", "толстое"]

export const Pizza = ({id, imageUrl="", name="", types=[0, 1], sizes=[26, 30, 40], price=0, clickToAdd, count}) => {  
    const [thickness, setThickness] = useState(types[0]);
    const [size, setSize] = useState(sizes[0])
    const [currentPrice, setCurrentPrice] = useState(price)
    const clicAddPizza = () => clickToAdd({pizzaInfo: {id, name, price: currentPrice, imageUrl, type:thicknesses[thickness], size}, count: count + 1})
    const setSizeAndPrice = useCallback((item) => {
      setSize(item);
      setCurrentPrice(() => {
        switch(item) {
          case 26: {
            return price
          }
          case 30: {
            return Math.round(price * 1.3)
          }
          case 40: {
            return Math.round(price * 1.8)
          }
        }}
      )
    })
    return (
      <div className="pizza-block">
        <img
          className="pizza-block__image"
          src={imageUrl}
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {thicknesses.map((item, i) => <li key={item+"__"+i} onClick={() => setThickness(i)} className={cn({
        active: i === thickness,
        disabled: !types.includes(i)
    })}>{item}</li>)}
          </ul>
          <ul>
            {sizes.map((item, i) => <li onClick={() => setSizeAndPrice(item)} className={item === size ? "active" : ""} key={item+"__"+i}>{item} см.</li>)}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{currentPrice} ₽</div>
          <button className="button button--outline button--add" onClick={clicAddPizza}>
            {plusSvg}
            <span>Добавить</span>
            {count && <i>{count}</i>}
          </button>
        </div>
      </div>
    );
}