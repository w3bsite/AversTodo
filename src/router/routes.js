import Home from "../views/Home";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/main",
    name: "Main",
    component: () => import("../views/Main")
  }
];

export default routes;
