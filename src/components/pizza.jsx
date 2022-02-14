import cn from "classnames";
import { useState } from "react";
import { plusSvg } from "./svg";


export const Pizza = ({id, imageUrl="", name="", types=[0, 1], sizes=[26, 30, 40], price=0}) => {
    const thicknesses = ["тонкое", "толстое"]
    const [thickness, setThickness] = useState(types[0]);
    const [size, setSize] = useState(0)
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
            {sizes.map((item, i) => <li onClick={() => setSize(i)} className={i === size ? "active" : ""} key={item+"__"+i}>{item} см.</li>)}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div className="button button--outline button--add">
            {plusSvg}
            <span>Добавить</span>
            <i>2</i>
          </div>
        </div>
      </div>
    );
}