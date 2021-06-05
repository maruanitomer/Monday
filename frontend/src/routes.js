import { Board } from "./modules/board";

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
