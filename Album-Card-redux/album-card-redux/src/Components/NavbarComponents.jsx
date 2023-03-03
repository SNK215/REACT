import { setIsDisplayed } from "../shared/modalSlice"
import { useDispatch, useSelector } from "react-redux"
import { setModalRecipeDisplayed } from "../recipes/modalRecipeSlice"

export const NavbarComponent = (props) =>  {

    const dispatch = useDispatch()
    const isLogged = useSelector(state =>state.auth.isLogged)


    return(
        <>
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary text-light" data-bs-theme="dark">
            <div className="container-fluid">
                <span><i className="bi bi-globe"></i> Projet Albums Redux</span>
                <div className="navbar-nav d-flex flex-row justify-content-end">
                    <button className={isLogged ? "btn btn-success  mx-2" : "btn btn-success mx-2 disabled"} onClick={()=>dispatch(setModalRecipeDisplayed(true))}><i className="bi bi-plus-circle"></i> Ajouter</button>
                    {isLogged ? <button className="btn btn-danger" onClick={props.logOut}>Déconnexion</button> : <button onClick={()=>dispatch(setIsDisplayed(true))} className="btn btn-primary">Inscription / Connexion</button>}
                </div>
            </div>
        </nav>
        </>
    )
}