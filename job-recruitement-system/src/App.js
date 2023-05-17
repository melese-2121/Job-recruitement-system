import { createBrowserRouter } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Profile from "./components/Profile";
import Requirements from "./components/Document";
import Admin from "./components/Admin";
import AddCompany from "./components/AddCompany";
import SeeCompany from "./components/SeeCompany";
import NewCompReq from "./components/NewCompReq";
import Org from "./components/Org";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/News",
    element: <News />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/profile/doc",
    element: <Requirements />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/companies/add",
    element: <AddCompany />,
  },
  {
    path: "/admin/companies/see",
    element: <SeeCompany />,
  },
  {
    path: "/admin/companies/req",
    element: <NewCompReq />,
  },
  {
    path: "/orgs",
    element: <Org />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

export default App;
