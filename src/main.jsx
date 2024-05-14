import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Contact from "./pages/Contact.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import Master from "./pages/Master.jsx";
import EditArticle from "./pages/EditArticle.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/articles/:id",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(`http://localhost:8081/articles/${params.id}`),
      },
    ],
  },
  {
    path: "/master",
    element: <Master />,
  },
  {
    path: "/masterlogin",
    element: <Login />,
  },
  {
    path: "/masterregister",
    element: <Register />,
  },
  {
    path: "/articles/:id/edit",
    element: <EditArticle />,
    loader: ({ params }) =>
      fetch(`http://localhost:8081/articles/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
