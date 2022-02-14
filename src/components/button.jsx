import classNames from "classnames"
import { Link } from "react-router-dom";
import { cartSvg } from "./svg";

export const Button = ({className}) => {
    return (
      <Link to={"/cart"} className={classNames("button", className)}>
        <span>520 ₽</span>
        <div className="button__delimiter"></div>
        {cartSvg}
        <span>3</span>
      </Link>
    );
}