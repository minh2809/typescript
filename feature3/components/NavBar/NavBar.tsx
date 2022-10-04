import React from "react";
import classes from "./NavBar.module.scss";
import { useRouter } from "next/router";
import Button from "components/Button/Button";

function NavBar() {
  const router = useRouter();
  const goToHome = () => {
    router.push("/home");
  };
  const goToAbout = () => {
    router.push("/about");
  };
  const goToContact = () => {
    router.push("/contact");
  };
  return (
    <div className={classes.navbar}>
      <Button onClick={goToHome}>HOME</Button>
      <Button onClick={goToAbout}>ABOUT</Button>
      <Button onClick={goToContact}>CONTACT</Button>
    </div>
  );
}

export default NavBar;
