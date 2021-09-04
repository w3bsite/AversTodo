import Home from "../views/Home";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/web",
    name: "Web",
    component: () => import("../views/Web")
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/Main")
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("../views/Test")
  }
];

export default routes;
