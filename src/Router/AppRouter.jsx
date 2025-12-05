import Home from "../Pages/Home";
import About from "../Pages/About";
import HomeLayout from "../Layouts/HomeLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";

const AppRouter = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      Component: HomeLayout,
      children: [
        {
            path: "/home",
            Component: Home,
            children: [
              {
                path: "app",
                Component: App,
              }
            ]
        },
        {
            path: "/about",
            element: <About/>,
        }
      ] 
    }
    
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default AppRouter;
