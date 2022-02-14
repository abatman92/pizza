import classNames from "classnames";
import { memo, useRef, useState } from "react";
import { useEffect } from "react";


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
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          ></path>
        </svg>
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