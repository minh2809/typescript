import React from "react";
import classes from "./Button.module.scss";

type ButtonProps = {
  children: string;
  onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <div className={classes.buttonWrapper}>
      <button onClick={onClick} className={classes.button}>
        {children}
      </button>
    </div>
  );
}

export default Button;
