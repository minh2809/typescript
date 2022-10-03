import React from "react";
import classes from "SignIn.module.scss";
import Title from "components/Title/Title";
import Button from "components/Button/Button";
import { useRouter } from "next/router";

function SignIn() {
  const router = useRouter();
  const goToSignUp = () => {
    router.push("/signup");
  };

  return (
    <div className={classes.container}>
      <Title>Sign In To My App</Title>
      <Button onClick={goToSignUp}>Go to SignUp</Button>
    </div>
  );
}

export default SignIn;
