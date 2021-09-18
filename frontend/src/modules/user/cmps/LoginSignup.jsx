import { TextField } from "@material-ui/core";
import {  useState } from "react";
import { useHistory } from "react-router-dom";
import { userService } from "../service/userService";

export const LoginSignup = () => {
  // const strongPasswordRegex = useRef(
  //   new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
  // );
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

    // if (!password.match(strongPasswordRegex)) {
    //   setMsg("Password is not strong enough");
    //   return;
    // }
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
  if (loggedInUser)
    return (
      <div className="login">
        <h1> Hello {loggedInUser.fullname}</h1>
        <button onClick={doLogout}>Logout</button>
      </div>
    );

  return (
    <div className="login">
      <h1 style={{ color: "red" }}>{msg} </h1>
      {logSignToggler ? (
        <div>
          <h1>Welcome to our Monday App</h1>
          <h4 className="continue">login to continue</h4>
        </div>
      ) : (
        <div>
          <h1>Join our Monday App</h1>
          <h4 className="continue">signup to continue</h4>
        </div>
      )}
      {logSignToggler ? (
        <form className="frm" onSubmit={doLogin}>
          {/* <input type="text" name="username" placeholder="Username" autoFocus /> */}
          <TextField
            style={{ width: "100%" }}
            variant="outlined"
            type="text"
            name="username"
            value={loginCred.username}
            onChange={onChangeHandler}
          />
          <br />
          <TextField
            style={{ width: "100%", margin: "10px 0px 20px 0px" }}
            name="password"
            type="password"
            variant="outlined"
            value={loginCred.password}
            onChange={onChangeHandler}
          />
          <br />
          <div className="flex align-senter">
            <button className="rounded" type="submit">
              Continue
            </button>
            <button
              onClick={() => {
                clearInputs();
                setLogSignToggler(false);
              }}
              className="register-btn"
              style={{ marginInlineStart: "20px" }}
            >
              {" "}
              Register Here
            </button>
          </div>
        </form>
      ) : (
        <div className="sign-up">
          <form className="flex column justify-center" onSubmit={doSignup}>
            <TextField
              style={{ margin: "5px 0px" }}
              type="text"
              name="fullname"
              variant="outlined"
              value={signupCred.fullname}
              onChange={onChangeHandler}
            />
            <TextField
              style={{ margin: "5px 0px" }}
              variant="outlined"
              type="text"
              name="username"
              value={signupCred.username}
              onChange={onChangeHandler}
            />
            <TextField
              style={{ margin: "5px 0px" }}
              variant="outlined"
              name="password"
              type="password"
              value={signupCred.password}
              onChange={onChangeHandler}
            />
            <button
              type="sumbit"
              className="regitser-button"
              style={{ marginBlockStart: "10px" }}
            >
              Continue
            </button>
            <hr />
            <h4>
              Already a member?{" "}
              <span
                onClick={() => {
                  clearInputs();
                  setLogSignToggler(true);
                }}
              >
                Sign In
              </span>
            </h4>
          </form>
        </div>
      )}
    </div>
  );
};
