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
                <h3>Liste des recettes</h3>
                <button className={isLogged ? "btn btn-success" : "btn btn-success disabled"} onClick={()=>dispatch(setModalRecipeDisplayed(true))}><i className="bi bi-plus-circle"></i> Ajouter</button>
            </div>
            <hr />
            {props.children}
        </div>
        </>
    )
}