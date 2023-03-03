import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Homepage from "./routes/homepage/Homepage";
import AuthForm from "./routes/auth/AuthForm";
import AdresseForm from "./routes/adresse/AdresseForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar/>,
        children: [
            {
                path: "/home",
                element: <Homepage/>
            },
            {
                path: "/Authentication",
                element: <AuthForm/>
            },
            {
                path: "/AdresseForm",
                element: <AdresseForm/>
            }
        ]
    }
])

export default router