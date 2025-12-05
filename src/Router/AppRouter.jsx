import Home from "../Pages/Home";
import About from "../Pages/About";
import HomeLayout from "../Layouts/HomeLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import axios from "axios";
import Error from "../components/Error";

const AppRouter = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      Component: HomeLayout,
      children: [
        {
            path: "/home",
            Component: Home,
            loader: async () => {
            try {
              let res = await axios.get("https://fakestoreapi.com/products");
              if (res) {
                console.log(res.data);
                return res.data;
              }
            } catch (error) {
              console.log("error in users api", error);
            }
          },
          hydrateFallbackElement: <Error/>,
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
