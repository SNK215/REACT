import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setModalRecipeDisplayed } from "./modalRecipeSlice"

export const RecipeListComponent = (props) => {

    const dispatch = useDispatch()
    const isLogged = useSelector(state =>state.auth.isLogged)

    return (
        <>
        <div className="bg-dark text-light p-3 w-75 rounded mx-auto mt-3">
            <div className="d-flex flex-row justify-content-between align-items-center">
                <h3>Albums</h3>
            </div>
            <hr />
            {props.children}
        </div>
        </>
    )
}