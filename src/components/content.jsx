import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Pizza } from ".";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizza, SetLoaded } from "../redux/actions/pizza";
import { Categories } from "./categories";
import PizzaLoader from "./pizzaLoader";
import { Sort } from "./sort";


const categoryItems = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sortItems = [
  { name: "популярности", type: "popularity" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "name" },
]

export const Content = () => {
  const dispatch = useDispatch()
  const {items, isLoaded} = useSelector(({pizzas}) => pizzas)
  const {category, sortBy} = useSelector(({filters}) => filters)
  const setFilterCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const setSortCategory = useCallback(type => dispatch(setSortBy(type)), [])
  useEffect(() => {
    dispatch(SetLoaded(false))
    dispatch(fetchPizza(category, sortBy))
  }, [category, sortBy])
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            setActive={setFilterCategory}
            items={categoryItems}
            activeCategoriesItem={category}
          />
          <Sort
            items={sortItems}
            activeSortCategory={sortBy}
            setCategory={setSortCategory}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {items.map((item) => (
            isLoaded ? <Pizza key={item.id} {...item} /> : <PizzaLoader key={item.id+"_loader"} /> 
          ))}
        </div>
      </div>
    </div>
  );
};
