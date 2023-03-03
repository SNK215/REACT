import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./routes/Homepage/Homepage";
import ContactList from "./routes/Contacts/ContactList";
import ContactForm from "./routes/Contacts/ContactForm";

const router  = createBrowserRouter([
    {
        path : "/",
        element: <Navbar/>,
        children: [
            {
                path:"/",
                element:<Homepage/>
            },
            {
                path:"/contacts",
                element:<ContactList/>
            },
            {
                path:"/form",
                element:<ContactForm/>
            }
        ]
    }
])

export default router