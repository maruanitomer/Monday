import { Component, useState } from "react";
import { userService } from "../services/userService";
import { Button, Input } from "@material-ui/core";

export const Login = () => {
  const [loggedinUser, setLoggedinUser] = useState(
    userService.getLoggedinUser()
  );

  const loginHandleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState((prevState) => ({
      loginCred: {
        ...prevState.loginCred,
        [name]: value,
      },
    }));
  };

  const signupHandleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState((prevState) => ({
      signupCred: {
        ...prevState.signupCred,
        [name]: value,
      },
    }));
  };

  const doLogin = async (ev) => {
    ev.preventDefault();
    const { username, password } = this.state.loginCred;
    if (!username || !password) {
      return this.setState({ msg: "Please enter user/password" });
    }
    const userCreds = { username, password };
    userService
      .login(userCreds)
      .then((user) => {
        this.setState(
          {
            loginCred: { username: "", password: "" },
            loggedInUser: user,
          },
          () => this.props.history.push("/toy")
        );
      })
      .catch((err) => {
        console.log("ERR", err);
        this.setState({ msg: "Try again" });
      });
  };

  const doSignup = async (ev) => {
    ev.preventDefault();
    console.log("signing up");
    const { username, password, fullname } = this.state.signupCred;
    if (!username || !password || !fullname) {
      return this.setState({ msg: "All inputs are required" });
    }

    userService.signup({ username, password, fullname }).then((user) => {
      console.log("sign up seccess!", user);
      this.setState({
        signupCred: { username: "", password: "", fullname: "" },
        loggedInUser: user,
      });
    });
  };

  const doLogout = () => {
    userService.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  const newUser = (ev) => {
    ev.preventDefault();
    const lastAns = this.state.isNewUser;
    this.setState({ isNewUser: !lastAns });
  };

  const loggedInUser = userService.getLoggedinUser();

  let signupSection = (
    <form className="frm" onSubmit={this.doSignup}>
      <h2>Signup</h2>
      <Input
        type="text"
        name="fullname"
        value={this.state.signupCred.fullname}
        onChange={this.signupHandleChange}
        placeholder="Full name"
        style={{ marginBottom: "1em" }}
      />
      <Input
        name="password"
        type="password"
        value={this.state.signupCred.password}
        onChange={this.signupHandleChange}
        placeholder="Password"
        style={{ marginBottom: "1em" }}
      />
      <Input
        type="text"
        name="username"
        value={this.state.signupCred.username}
        onChange={this.signupHandleChange}
        placeholder="Username"
        style={{ marginBottom: "1em" }}
      />
      <br />
      <Button
        variant="outlined"
        style={{ marginInlineEnd: "1em" }}
        type="submit"
      >
        Signup
      </Button>
      <Button variant="outlined" onClick={this.newUser}>
        {" "}
        have a user? login
      </Button>
    </form>
  );
  let loginSection = (
    <form className="frm" onSubmit={this.doLogin}>
      <h2>Login</h2>
      <Input
        type="text"
        name="username"
        value={this.state.loginCred.username}
        onChange={this.loginHandleChange}
        placeholder="Username"
        style={{ marginBottom: "1em" }}
      />
      <br />
      <Input
        type="password"
        name="password"
        value={this.state.loginCred.password}
        onChange={this.loginHandleChange}
        placeholder="Password"
        style={{ marginBottom: "1em" }}
      />
      <br />
      <Button
        variant="outlined"
        style={{ marginInlineEnd: "1em" }}
        type="submit"
      >
        Login
      </Button>
      <Button variant="outlined" onClick={this.newUser}>
        Dont have a user? signup
      </Button>
    </form>
  );
  const { isNewUser } = this.state;

  return (
    <div className="login">
      <h2>Login / Signup</h2>
      <p>{this.state.msg}</p>
      {loggedInUser && (
        <div>
          <h3>
            Welcome {loggedInUser.fullname}
            <Button variant="outlined" onClick={this.doLogout}>
              Logout
            </Button>
          </h3>
        </div>
      )}
      {!loggedInUser && !isNewUser && loginSection}
      {!loggedInUser && isNewUser && signupSection}
    </div>
  );
};
