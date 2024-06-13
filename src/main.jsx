import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Product from "./pages/Product.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import Master from "./pages/Master.jsx";
import EditArticle from "./pages/EditArticle.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import ProtectedRoute from "./pages/login/ProtectedRoute.jsx";
import AuthRedirect from "./pages/login/AuthRedirect.jsx";
import { AuthProvider } from "./pages/login/AuthContext.jsx";

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
        path: "/product",
        element: <Product />,
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
    element: (
      <ProtectedRoute>
        <Master />
      </ProtectedRoute>
    ),
  },
  {
    path: "/masterlogin",
    element: (
      <AuthRedirect>
        <Login />
      </AuthRedirect>
    ),
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
