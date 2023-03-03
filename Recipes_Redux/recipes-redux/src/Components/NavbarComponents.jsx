import { setIsDisplayed } from "../shared/modalSlice"
import { useDispatch, useSelector } from "react-redux"

export const NavbarComponent = (props) =>  {

    const dispatch = useDispatch()
    const isLogged = useSelector(state =>state.auth.isLogged)


    return(
        <>
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary text-light" data-bs-theme="dark">
            <div className="container-fluid">
                <span><i className="bi bi-globe"></i> Projet Recipes Redux</span>
                <div className="navbar-nav d-flex flex-row justify-content-end">
                    <span className="mt-2 me-2">{isLogged ? "Vous êtes connecté" : "Vous n'êtes pas connecté"}</span>
                    {isLogged ? <button className="btn btn-danger" onClick={props.logOut}>Déconnexion</button> : <button onClick={()=>dispatch(setIsDisplayed(true))} className="btn btn-primary">Inscription / Connexion</button>}
                </div>
            </div>
        </nav>
        </>
    )
}