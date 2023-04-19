import React from "react";
import classes from './Login.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
import Input from "../UI/Input"
const Login = () => {
  return (
    <Card className={classes.login}>
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <Input type="text"/>
        </label>
        <br />
        <label>
          <p>Password</p>
          <Input type="password"/>
        </label>
        <br />
        <div>
          <Button>Login</Button>
        </div>
      </form>
    </Card>
  );
}

export default Login