import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Pizza } from ".";
import { setCartItems } from "../redux/actions/cart";
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
  const cartItems = useSelector(({cart}) => cart.items)
  const clickToAdd = useCallback((obj) => {
    dispatch(setCartItems(obj));
  });
  const setFilterCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const setSortCategory = useCallback(type => dispatch(setSortBy(type)), [])
  useEffect(() => {
    dispatch(SetLoaded(false))
    dispatch(fetchPizza(category, sortBy))
  }, [category, sortBy])
  const currentPizzaCount = (index) => {
    if (cartItems[index]) {
      return cartItems[index].length;
    }
  };
  const renderPizzaItems = items.map((item, i) => (
    isLoaded ? <Pizza key={item.id} clickToAdd={clickToAdd} count={currentPizzaCount(i)} {...item} /> : <PizzaLoader key={item.id+"_loader"} /> 
  ))
  
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
          {renderPizzaItems}
        </div>
      </div>
    </div>
  );
};
