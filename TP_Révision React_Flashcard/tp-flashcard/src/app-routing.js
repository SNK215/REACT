import { createBrowserRouter } from "react-router-dom";
import NavbarComponent from "./routes/shared/NavbarComponent";
import HomepageComponent from "./routes/homepage/HomepageComponent";
import FlashcardComponent from "./routes/flashcard/FlashcardComponent";
import FormComponent from "./routes/form/FormComponent";


const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarComponent/>,
        children: [
            {
                path: "/",
                element: <HomepageComponent/>
            },
            {
                path: "/flashcard/:id",
                element : <FlashcardComponent/>
            },
            {
                path: "/form",
                element: <FormComponent/>
            }
        ]
    }
])

export default router