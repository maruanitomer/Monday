import { Board } from "./modules/board";
// import { LoginSignup } from "./modules/user/cmps/LoginSignup";
import { Register } from "./modules/user/screens/Register";

export const routes = [
  {
    path: "/",
    component: Board,
  },
  {
    path: "/board",
    component: Board,
  },
  {
    path: "/board/:boardId",
    component: Board,
  },
  {
    path: "/sign",
    component: Register
  }
  // {
  //     path: '/toy/edit/:id',
  //     component: ToyEdit,
  // },
  // {
  //     path: '/toy/details/:id',
  //     component: ToyDetails,
  // },
  // {
  //     path: '/about',
  //     component: About,
  // },
];
