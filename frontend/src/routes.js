import { Board } from "./modules/board";
// import { LoginSignup } from "./modules/user/cmps/LoginSignup";
import { Register } from "./modules/user/screens/Register";

export const routes = [
  {
    exact: true,
    path: "/",
    component: Board,
  },
  {
    exact: true,
    path: ['/board', '/board/:boardId'],
    component: Board,
  },
  {
    exact: true,
    path: "/sign",
    component: Register
  }

];
