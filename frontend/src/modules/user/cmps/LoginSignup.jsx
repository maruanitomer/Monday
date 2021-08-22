import { Button, TextField } from "@material-ui/core";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { userService } from "../service/userService";

export const LoginSignup = () => {
  const strongPasswordRegex = useRef(
    new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
  );
  const [loginCred, setLoginCred] = useState({
    username: "",
    password: "",
  });
  const [signupCred, setSignupCred] = useState({
    fullname: "",
    username: "",
    password: "",
  });
  const history = useHistory();

  const [msg, setMsg] = useState();
  const [loggedInUser, setLoggedInUser] = useState(userService.getLoggedinUser);
  const [logSignToggler, setLogSignToggler] = useState(true);

  const onChangeHandler = (ev) => {
    const { name, value } = ev.target;
    logSignToggler
      ? setLoginCred({ ...loginCred, [name]: value })
      : setSignupCred({ ...signupCred, [name]: value });
  };

  const doLogin = async (ev) => {
    ev.preventDefault();
    const { username, password } = loginCred;
    if (!username || !password) {
      setMsg("Please enter user/password");
      return;
    }
    userService
      .login(loginCred)
      .then((user) => {
        setLoginCred({ username: "", password: "" });
        setLoggedInUser(user);
        history.push("/board");
      })
      .catch((err) => {
        setMsg(err);
      });
  };

  const doLogout = () => {
    userService
      .logout()
      .then((msg) => {
        setMsg(msg);
        setLoggedInUser(null);
      })
      .catch((err) => setMsg(err));
  };

  const clearInputs = () => {
    setSignupCred({ fullname: "", username: "", password: "" });
    setLoginCred({ username: "", password: "" });
    setMsg("");
  };
  const doSignup = async (ev) => {
    ev.preventDefault();
    const { username, password, fullname } = signupCred;
    // (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
    // (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
    // (?=.*[0-9])	The string must contain at least 1 numeric character
    // (?=.*[!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
    // (?=.{8,})	The string must be eight characters or longer
    if (!password.match(strongPasswordRegex)) {
      setMsg("Password is not strong enough");
      return;
    }
    if (!username || !password || !fullname) {
      setMsg("One or more of the inputs are empty");
    } else
      userService
        .signup(signupCred)
        .then((user) => {
          setSignupCred({ fullname: "", username: "", password: "" });
          setLoggedInUser(user);
          history.push("/board");
        })
        .catch((err) => setMsg(err));
  };

  return (
    <div className="flex column align-center">
      <h1 style={{ color: "red" }}>{msg} </h1>
      {loggedInUser ? (
        <div>
          <h1> Hello {loggedInUser.fullname}</h1>
          <button onClick={doLogout}>Logout</button>
        </div>
      ) : logSignToggler ? (
        // Login form
        <form className="flex column align-center" onSubmit={doLogin}>
          <h2>Login</h2>
          <div className="flex align-center">
            <span>Username</span>
            <TextField
              type="text"
              variant="outlined"
              name="username"
              value={loginCred.username}
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex align-center">
            <span>Password</span>
            <TextField
              name="password"
              type="password"
              variant="outlined"
              value={loginCred.password}
              onChange={onChangeHandler}
            />
          </div>
          <Button variant="outlined" type="submit">
            Login
          </Button>
          <span
            onClick={() => {
              clearInputs();
              setLogSignToggler(false);
            }}
          >
            Click here to join us!
          </span>
        </form>
      ) : (
        // Signup form
        <form className="flex column align-center" onSubmit={doSignup}>
          <h2>Signup</h2>
          <div className="flex align-center">
            <span>Fullname</span>
            <TextField
              type="text"
              name="fullname"
              variant="outlined"
              value={signupCred.fullname}
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex align-center">
            <span>Username</span>
            <TextField
              variant="outlined"
              type="text"
              name="username"
              value={signupCred.username}
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex align-center">
            <span>Password</span>
            <TextField
              variant="outlined"
              name="password"
              type="password"
              value={signupCred.password}
              onChange={onChangeHandler}
            />
          </div>
          <Button variant="outlined" type="submit">
            Signup
          </Button>
          <span
            onClick={() => {
              clearInputs();
              setLogSignToggler(true);
            }}
          >
            Click here to login
          </span>
        </form>
      )}
    </div>
  );
};
