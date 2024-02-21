import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Users from "../Modules/User/Page/Users";
import User from "../Modules/User/Page/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:id",
    element: <User />,
  },
]);

export default router;
