import classNames from "classnames"


export const Button = ({className, children}) => {
    return (
      <button className={classNames("button", className)}>
        {children}
      </button>
    );
}