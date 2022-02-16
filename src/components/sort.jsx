import classNames from "classnames";
import { memo, useRef, useState } from "react";
import { useEffect } from "react";
import { arrowSvg } from "./svg";


export const Sort = memo(({ items=[], activeSortCategory, setCategory }) => {
  const [popupVisibility, setPopupVisibility] = useState(false);
  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) setPopupVisibility(false);
  };
  const sortRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, [popupVisibility]);
  const activeSortItemHandler = (value) => {
    setCategory(value);
    setPopupVisibility(false);
  };
  const activeLabel = items.find(item => item.type === activeSortCategory).name
  return (
    <div className="sort" ref={sortRef}>
      <div
        className={classNames("sort__label", {
          sort__label_active: popupVisibility,
        })}
        onClick={() => setPopupVisibility(!popupVisibility)}
      >
        {arrowSvg}
        <b>Сортировка по:</b>
        <span>{activeLabel}</span>
      </div>
      {popupVisibility && (
        <div className="sort__popup">
          <ul>
            {items.map((item, i) => (
              <li
                key={item.type}
                onClick={() => {
                  activeSortItemHandler(item.type);
                }}
                className={activeSortCategory === item.type ? "active" : ""}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});