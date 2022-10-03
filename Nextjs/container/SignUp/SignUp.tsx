import React from "react";
import classes from "./SignUp.module.scss";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();
  const goToSignIn = () => {
    router.push("/login");
  };

  return (
    <div className={classes.container}>
      <Title>Sign Up To My App Now</Title>
      <Button onClick={goToSignIn}>Go To SignIn</Button>
    </div>
  );
}

export default SignUp;
