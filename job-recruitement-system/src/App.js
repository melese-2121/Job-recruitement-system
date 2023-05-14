import { createBrowserRouter } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import News from "./pages/News";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Profile from "./components/Profile";
import Requirements from "./components/Document";

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
    path: "/*",
    element: <NotFound />,
  },
]);

export default App;
