import { createBrowserRouter } from "react-router-dom";
import Root from "../App/Root";
import Home from "../App/Home/Home";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);

export default Routes;