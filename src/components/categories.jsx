import { memo } from "react";

export const Categories = memo(({ items, setActive, activeCategoriesItem }) => {
  return (
    <div className="categories">
      <ul>
        <li className={!activeCategoriesItem && activeCategoriesItem !==0 ? "active" : ""} onClick={() => setActive(null)}>
          Все
        </li>
        {items.map((item, i) => (
          <li
            className={activeCategoriesItem === i ? "active" : ""}
            key={`${item}__${i}`}
            onClick={() => setActive(i)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});
