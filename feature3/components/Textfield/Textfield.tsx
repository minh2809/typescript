import React from "react";
import classes from "./Textfield.module.scss";

type TitleProps = {
  children: string;
};

function Textfield({ children }: TitleProps) {
  return (
    <div className={classes.textfieldContainer}>
      <p className={classes.textfield}>{children}</p>
    </div>
  );
}

export default Textfield;
