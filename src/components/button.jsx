import classNames from "classnames"
import { Link } from "react-router-dom";
import { cartSvg } from "./svg";

export const Button = ({className, children}) => {
    return (
      <button className={classNames("button", className)}>
        {children}
      </button>
    );
}