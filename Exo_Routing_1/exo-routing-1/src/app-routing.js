import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { NavbarComponent } from "./Components/NavbarComponent";
import ErrorPage from "./ErrorPage";
import Homepage from "./routes/Homepage/Homepage"
import MyProjects from "./routes/MyProjects/MyProjects"
import About from "./routes/About/About"
import Contact from "./routes/ContactMe/ContactMe"

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarComponent/>,
        errorElement:<ErrorPage/>,
        children: [
            {
            path:"/",
            element:<Homepage/>
        },
        {
            path:"/projects",
            element:<MyProjects/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        }
    ]
    }
])

export default router