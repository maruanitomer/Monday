import { Board } from "./modules/board";
import { LoginSignup } from "./modules/user/cmps/LoginSignup";

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
    component: LoginSignup
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
