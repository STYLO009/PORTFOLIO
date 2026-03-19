import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "skills", Component: Skills },
      { path: "achievements", Component: Achievements },
      { path: "contact", Component: Contact },
    ],
  },
]);
